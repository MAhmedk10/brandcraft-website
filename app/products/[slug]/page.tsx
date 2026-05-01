import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { client } from "@/sanity/lib/client"
import {
  productBySlugQuery,
  allProductSlugsQuery,
} from "@/sanity/lib/queries"
import { urlFor } from "@/sanity/lib/image"
import {
  getProductBySlug,
  getRelatedProducts,
  getAllSlugs,
  type ProductData,
} from "@/lib/products-data"

import { ProductHero } from "@/components/product/product-hero"
import { ProductKeyFeatures } from "@/components/product/product-key-features"
import { ProductCustomization } from "@/components/product/product-customization"
import { ProductHowToOrder } from "@/components/product/product-how-to-order"
import { ProductQuoteForm } from "@/components/product/product-quote-form"
import { ProductGallery } from "@/components/product/product-gallery"
import { ProductManufacturing } from "@/components/product/product-manufacturing"
import { ProductWhyChooseUs } from "@/components/product/product-why-choose-us"
import { ProductTestimonials } from "@/components/product/product-testimonials"
import { ProductStats } from "@/components/product/product-stats"
import { ProductIndustries } from "@/components/product/product-industries"
import { ProductFAQSection } from "@/components/product/product-faq"
import { ProductRelated } from "@/components/product/product-related"
import { ProductCTA } from "@/components/product/product-cta"
import { PatchOptionsSection } from "@/components/product/patch-options-section"
import { BackingOptionsSection } from "@/components/product/backing-options-section"

/**
 * Product page — backed by Sanity.
 *
 * Strategy:
 *   1. Fetch the product from Sanity using `productBySlugQuery`.
 *   2. If Sanity has no document for the slug yet (e.g. before content is
 *      entered), fall back to the local `products-data.ts` so the site keeps
 *      working during the CMS migration.
 *   3. Normalise Sanity's shape into the `ProductData` shape that downstream
 *      components already consume — keeps UI/components untouched.
 *   4. Every field access uses `??` / `??.` fallbacks so a half-filled CMS
 *      entry never crashes the render.
 *
 * `SANITY_API_TOKEN` is intentionally NOT used here — this page is rendered
 * on the server, but only public published content is read via the public
 * `client` (no token) so the token can never leak.
 */

// Sanity-shape image asset (subset we care about).
type SanityImage = {
  asset?: { _ref?: string; _id?: string; url?: string } | null
  alt?: string | null
} | null | undefined

/** Convert a Sanity image to an absolute URL, with safe fallback. */
function imgUrl(img: SanityImage, fallback?: string): string | undefined {
  if (img?.asset) {
    try {
      return urlFor(img as Parameters<typeof urlFor>[0]).url()
    } catch {
      // urlFor can throw if the asset hasn't been resolved — fall through.
    }
  }
  if (img?.asset?.url) return img.asset.url
  return fallback
}

/** Normalise a Sanity product document into the local ProductData shape. */
function normaliseSanityProduct(doc: any, slug: string): ProductData {
  return {
    slug,
    title: doc?.title ?? "",
    heroDescription: doc?.heroDescription ?? "",
    valueProposition: doc?.valueProposition ?? "",
    ctaText: doc?.ctaText ?? "Get a Quote",
    keyFeatures: Array.isArray(doc?.keyFeatures)
      ? doc.keyFeatures.map((f: any) => ({
          title: f?.title ?? "",
          description: f?.description ?? "",
        }))
      : [],
    customizationOptions: Array.isArray(doc?.customizationOptions)
      ? doc.customizationOptions.filter(Boolean)
      : [],
    customizationImage: imgUrl(doc?.customizationImage),
    customizationImageAlt: doc?.customizationImage?.alt ?? undefined,
    orderingSteps: Array.isArray(doc?.orderingSteps)
      ? doc.orderingSteps.map((s: any, i: number) => ({
          number: s?.number ?? String(i + 1).padStart(2, "0"),
          title: s?.title ?? "",
          description: s?.description ?? "",
        }))
      : [],
    manufacturingProcess: Array.isArray(doc?.manufacturingProcess)
      ? doc.manufacturingProcess.filter(Boolean)
      : [],
    galleryPlaceholders: Array.isArray(doc?.gallery)
      ? doc.gallery.map((g: any) => ({
          src: imgUrl(g?.image) ?? "",
          alt: g?.alt ?? g?.image?.alt ?? "",
          caption: g?.caption ?? "",
        }))
      : [],
    pricingExplanation: doc?.pricingExplanation ?? "",
    industriesServed: Array.isArray(doc?.industriesServed)
      ? doc.industriesServed.filter(Boolean)
      : [],
    testimonials: Array.isArray(doc?.testimonials)
      ? doc.testimonials.map((t: any) => ({
          quote: t?.quote ?? "",
          name: t?.name ?? "",
          role: t?.role ?? "",
          company: t?.company ?? "",
        }))
      : [],
    faqs: Array.isArray(doc?.faqs)
      ? doc.faqs.map((q: any) => ({
          question: q?.question ?? "",
          answer: q?.answer ?? "",
        }))
      : [],
    relatedSlugs: Array.isArray(doc?.relatedProducts)
      ? doc.relatedProducts
          .map((r: any) => r?.slug)
          .filter((s: unknown): s is string => typeof s === "string")
      : [],
    whyChooseUs: Array.isArray(doc?.whyChooseUs)
      ? doc.whyChooseUs.map((w: any) => ({
          title: w?.title ?? "",
          description: w?.description ?? "",
        }))
      : [],
    stats: Array.isArray(doc?.stats)
      ? doc.stats.map((s: any) => ({
          value: s?.value ?? "",
          label: s?.label ?? "",
        }))
      : [],
    isPatchProduct: !!doc?.isPatchProduct,
    patchOptions: Array.isArray(doc?.patchOptions)
      ? doc.patchOptions.map((p: any) => ({
          name: p?.name ?? "",
          description: p?.description ?? "",
          image: imgUrl(p?.image),
        }))
      : undefined,
  }
}

/**
 * Pre-build every known product page at build time.
 * Combines slugs from Sanity (live content) with local slugs (fallback) so
 * all 20 products are still pre-rendered during migration.
 */
export async function generateStaticParams() {
  let sanitySlugs: string[] = []
  try {
    sanitySlugs = await client.fetch<string[]>(
      allProductSlugsQuery,
      {},
      { next: { revalidate: 3600 } }
    )
  } catch {
    sanitySlugs = []
  }
  const localSlugs = getAllSlugs()
  const merged = Array.from(new Set([...(sanitySlugs ?? []), ...localSlugs]))
  return merged.map((slug) => ({ slug }))
}

/** Build SEO metadata from Sanity (with fallbacks to local data). */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params

  let doc: any = null
  try {
    doc = await client.fetch(
      productBySlugQuery,
      { slug },
      { next: { revalidate: 3600 } }
    )
  } catch {
    doc = null
  }

  const local = getProductBySlug(slug)
  const title = doc?.metaTitle ?? doc?.title ?? local?.title
  const description =
    doc?.metaDescription ?? doc?.heroDescription ?? local?.heroDescription

  if (!title) return {}

  return {
    title,
    description: description ?? undefined,
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  // 1. Try Sanity first.
  let sanityDoc: any = null
  try {
    sanityDoc = await client.fetch(
      productBySlugQuery,
      { slug },
      { next: { revalidate: 3600 } }
    )
  } catch {
    sanityDoc = null
  }

  // 2. Resolve product: Sanity (preferred) → local fallback → notFound.
  const product: ProductData | undefined = sanityDoc
    ? normaliseSanityProduct(sanityDoc, slug)
    : getProductBySlug(slug)

  if (!product) notFound()

  // 3. Related products: prefer Sanity refs (already resolved in the query),
  //    otherwise fall back to local lookup by slug.
  const related =
    Array.isArray(sanityDoc?.relatedProducts) && sanityDoc.relatedProducts.length > 0
      ? (sanityDoc.relatedProducts
          .map((r: any) =>
            r?.slug ? getProductBySlug(r.slug) ?? null : null
          )
          .filter(Boolean) as ProductData[])
      : getRelatedProducts(product.relatedSlugs ?? [])

  return (
    <>
      {/* 1. Hero */}
      <ProductHero
        title={product.title}
        description={product.heroDescription}
        valueProposition={product.valueProposition}
        ctaText={product.ctaText}
      />

      {/* 2. Key Features */}
      <ProductKeyFeatures features={product.keyFeatures ?? []} />

      {/* 3. Patch Options — patch products only */}
      {product.isPatchProduct && product.patchOptions && product.patchOptions.length > 0 && (
        <PatchOptionsSection
          productTitle={product.title}
          options={product.patchOptions}
        />
      )}

      {/* 4. Backing Options — patch products only */}
      {product.isPatchProduct && <BackingOptionsSection />}

      {/* Non-patch: Customization Options */}
      {!product.isPatchProduct && (
        <ProductCustomization
          options={product.customizationOptions ?? []}
          image={product.customizationImage}
          imageAlt={
            product.customizationImageAlt ||
            `${product.title} customization options`
          }
        />
      )}

      {/* 5. How to Order */}
      <ProductHowToOrder
        steps={product.orderingSteps ?? []}
        ctaText={product.ctaText}
      />

      {/* 6. Quote / Order Form */}
      <ProductQuoteForm serviceTitle={product.title} />

      {/* 7. Gallery */}
      <ProductGallery items={product.galleryPlaceholders ?? []} />

      {/* 8. Manufacturing Process */}
      <ProductManufacturing steps={product.manufacturingProcess ?? []} />

      {/* 9. Why Choose Us */}
      <ProductWhyChooseUs items={product.whyChooseUs ?? []} />

      {/* 10. Testimonials */}
      <ProductTestimonials testimonials={product.testimonials ?? []} />

      {/* 11. Company Stats */}
      <ProductStats stats={product.stats ?? []} />

      {/* 12. Industries Served */}
      <ProductIndustries industries={product.industriesServed ?? []} />

      {/* 13. FAQ */}
      <ProductFAQSection faqs={product.faqs ?? []} />

      {/* 14. Related Services */}
      <ProductRelated products={related} />

      {/* 15. Final CTA */}
      <ProductCTA title={product.title} ctaText={product.ctaText} />
    </>
  )
}

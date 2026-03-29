import { notFound } from "next/navigation"
import type { Metadata } from "next"
import {
  getProductBySlug,
  getRelatedProducts,
  getAllSlugs,
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

// Pre-generate all 20 product pages at build time
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return {}

  return {
    title: product.title,
    description: product.heroDescription,
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) notFound()

  const related = getRelatedProducts(product.relatedSlugs)

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
      <ProductKeyFeatures features={product.keyFeatures} />

      {/* 3. Patch Options — patch products only */}
      {product.isPatchProduct && product.patchOptions && (
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
          options={product.customizationOptions}
          image={product.customizationImage}
          imageAlt={product.customizationImageAlt || `${product.title} customization options`}
        />
      )}

      {/* 5. Quote / Order Form */}
      <ProductQuoteForm serviceTitle={product.title} />

      {/* 6. Gallery */}
      <ProductGallery items={product.galleryPlaceholders} />

      {/* 7. How to Order / Manufacturing step-by-step */}
      <ProductHowToOrder steps={product.orderingSteps} ctaText={product.ctaText} />

      {/* 7. Manufacturing Process */}
      <ProductManufacturing steps={product.manufacturingProcess} />

      {/* 8. Why Choose Us */}
      <ProductWhyChooseUs items={product.whyChooseUs} />

      {/* 9. Testimonials */}
      <ProductTestimonials testimonials={product.testimonials} />

      {/* 10. Company Stats */}
      <ProductStats stats={product.stats} />

      {/* 11. Industries Served */}
      <ProductIndustries industries={product.industriesServed} />

      {/* 12. FAQ */}
      <ProductFAQSection faqs={product.faqs} />

      {/* 13. Related Services */}
      <ProductRelated products={related} />

      {/* 14. Final CTA */}
      <ProductCTA title={product.title} ctaText={product.ctaText} />
    </>
  )
}

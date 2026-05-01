import { HeroSection } from "@/components/home/hero-section"
import { QuickQuoteForm } from "@/components/home/quick-quote-form"
import { TrustSection } from "@/components/home/trust-section"
import {
  ServicesOverview,
  type ServicesOverviewProduct,
} from "@/components/home/services-overview"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { ProcessSection } from "@/components/home/process-section"
import { PortfolioSection } from "@/components/home/portfolio-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CtaSection } from "@/components/home/cta-section"
import { client } from "@/sanity/lib/client"
import { allProductsQuery } from "@/sanity/lib/queries"
import { urlFor } from "@/sanity/lib/image"

/**
 * Type matching the projection in `allProductsQuery`.
 * Kept loose because Sanity may return partial documents during migration.
 */
type SanityProductCard = {
  _id?: string
  title?: string | null
  slug?: string | null
  shortDescription?: string | null
  heroImage?: {
    asset?: { _ref?: string; url?: string } | null
    alt?: string | null
  } | null
}

/**
 * Map a Sanity product (lightweight projection) into the shape the
 * `ServicesOverview` grid renders. Returns `null` for any record missing
 * the minimum required fields so the grid never crashes.
 */
function toGridProduct(p: SanityProductCard): ServicesOverviewProduct | null {
  if (!p?.slug || !p?.title) return null

  let imageUrl = ""
  if (p.heroImage?.asset) {
    try {
      imageUrl = urlFor(p.heroImage as Parameters<typeof urlFor>[0]).url()
    } catch {
      imageUrl = ""
    }
  }

  return {
    title: p.title,
    href: `/products/${p.slug}`,
    image: imageUrl,
    imageAlt: p.heroImage?.alt ?? p.title,
    description: p.shortDescription ?? "",
  }
}

export default async function HomePage() {
  // Fetch products from Sanity. Empty array on any failure so the homepage
  // never breaks — `ServicesOverview` will fall back to its built-in list.
  let sanityProducts: SanityProductCard[] = []
  try {
    sanityProducts = await client.fetch<SanityProductCard[]>(
      allProductsQuery,
      {},
      { next: { revalidate: 3600 } }
    )
  } catch {
    sanityProducts = []
  }

  const gridProducts = (sanityProducts ?? [])
    .map(toGridProduct)
    .filter((p): p is ServicesOverviewProduct => p !== null)

  return (
    <>
      <HeroSection />
      <QuickQuoteForm />
      <TrustSection />
      <ServicesOverview products={gridProducts} />
      <WhyChooseUs />
      <ProcessSection />
      <PortfolioSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  )
}

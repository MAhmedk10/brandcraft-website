import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ImageIcon } from "lucide-react"

/**
 * Lightweight product shape consumed by the homepage grid.
 *
 * Both Sanity (via app/page.tsx) and the local fallback array below populate
 * this shape — the component itself is purely presentational and stays
 * identical to the previous design (1 col mobile, 2-2-2-2-2 tablet,
 * 3-3-3 + centred 10th card on desktop).
 */
export interface ServicesOverviewProduct {
  title: string
  href: string
  image: string
  imageAlt: string
  description: string
}

/**
 * Local fallback used when Sanity has no products yet (CMS migration window).
 * Keeps the homepage grid populated end-to-end before any content is entered.
 */
export const servicesOverviewFallbackProducts: ServicesOverviewProduct[] = [
  {
    title: "Custom Patches",
    href: "/products/custom-patches",
    image: "/images/custom-patches/custom-patch-2.jpeg",
    imageAlt: "Custom patches",
    description:
      "Versatile patches created from premium materials for uniforms, merchandise, and branding. Choose from multiple finishes including woven, embroidered, PVC, and leather options to match your brand aesthetic.",
  },
  {
    title: "Jacket Patches",
    href: "/products/custom-jacket-patches",
    image: "/images/custom-jacket-patches/custom-jacket-patch-6.jpeg",
    imageAlt: "Jacket patches",
    description:
      "Large back patches and sleeve designs perfect for jackets, vests, and outerwear. Make a bold statement with eye-catching custom artwork that captures attention and builds brand recognition.",
  },
  {
    title: "Embroidered Patches",
    href: "/products/embroidered-patches",
    image: "/images/embroidered-patches/embroidered-patch-3.jpeg",
    imageAlt: "Embroidered patches",
    description:
      "Transform designs into embroidered masterpieces with classic stitching, puff effects, and floating thread techniques. Premium embroidery delivers sophistication and durability for corporate and professional applications.",
  },
  {
    title: "Chenille Patches",
    href: "/products/chenille-patches",
    image: "/images/chenille-patches/chenille-patch-3.jpeg",
    imageAlt: "Chenille patches",
    description:
      "Soft, fuzzy threads create a plush effect perfect for capturing a classic varsity look. Add playful dimension and texture to designs while maintaining timeless appeal for schools and athletic organizations.",
  },
  {
    title: "Leather Patches",
    href: "/products/leather-patches",
    image: "/images/leather-patches/leather-patch-1.jpeg",
    imageAlt: "Leather patches",
    description:
      "Crafted from genuine leather for timeless sophistication and durability. Choose laser etching, debossing, or full-color printing for luxurious custom designs that elevate any product.",
  },
  {
    title: "Woven Patches",
    href: "/products/woven-patches",
    image: "/images/woven-patches/woven-patch-2.jpeg",
    imageAlt: "Woven patches",
    description:
      "Fine detail patches with a smooth finish and professional appearance. Ideal for corporate uniforms and premium merchandise where precision and quality represent your brand value.",
  },
  {
    title: "Iron On Patches",
    href: "/products/iron-on-patches",
    image: "/images/iron-on-patches/iron-on-patch-5.jpeg",
    imageAlt: "Iron on patches",
    description:
      "Easy heat-activated application with long-lasting adhesion. Perfect for DIY projects, quick turnarounds, and applications where sewing isn't practical or desired.",
  },
  {
    title: "Velcro Patches",
    href: "/products/velcro-patches",
    image: "/images/velcro-patches/velcro-patch-1.jpeg",
    imageAlt: "Velcro patches",
    description:
      "Removable hook and loop backing system allows for quick changes and repositioning. Ideal for military gear, tactical equipment, and temporary customization needs.",
  },
  {
    title: "PVC Patches",
    href: "/products/pvc-patches",
    image: "/images/pvc-patches/pvc-patch-2.jpeg",
    imageAlt: "PVC patches",
    description:
      "Maximize design detail with resilient rubber material that ensures vibrant colors and lasting wear. The thicker, more substantial feel perfect for bold 3D designs and outdoor applications.",
  },
  {
    title: "Sublimation Patches",
    href: "/products/sublimation-patches",
    image: "/images/sublimation-patches/sublimation-patch-1.jpeg",
    imageAlt: "Sublimation patches",
    description:
      "Full-color photo-quality prints with unlimited color options. Capture complex artwork and photographic details with precision for premium custom designs.",
  },
]

interface ServicesOverviewProps {
  /**
   * Products to render in the grid. The page composing this component
   * (app/page.tsx) fetches from Sanity and falls back to
   * `servicesOverviewFallbackProducts` when no CMS content exists.
   */
  products?: ServicesOverviewProduct[]
}

export function ServicesOverview({ products }: ServicesOverviewProps = {}) {
  const source =
    products && products.length > 0
      ? products
      : servicesOverviewFallbackProducts
  const visibleProducts = source.slice(0, 10)

  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header — centred */}
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-secondary-foreground md:text-4xl">
            Our Products
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-muted-foreground">
            Browse our full range of custom branding solutions.
          </p>
        </div>

        {/*
          Grid: 1-col mobile, 2-col tablet (2-2-2-2-2), 3-col desktop (3-3-3-1 centered)
          On 3-col the last item spans columns 2 to center it
        */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProducts.map((product, index) => (
            <Link
              key={product.href}
              href={product.href}
              className={`group ${
                index === 9 ? "sm:col-span-1 lg:col-start-2" : ""
              }`}
            >
              <div className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-all hover:shadow-lg">
                <div className="relative aspect-square overflow-hidden bg-muted">
                  {product.image ? (
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted-foreground/40">
                      <ImageIcon className="h-10 w-10" />
                      <span className="text-xs font-medium">Image Coming Soon</span>
                    </div>
                  )}
                </div>
                <div className="flex flex-grow flex-col gap-3 px-5 py-4">
                  <h3 className="font-serif text-lg font-semibold text-card-foreground">
                    {product.title}
                  </h3>
                  <p className="flex-grow text-sm leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-2 text-accent transition-transform group-hover:translate-x-1">
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

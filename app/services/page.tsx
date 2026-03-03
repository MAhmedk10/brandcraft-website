import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Layers, Sticker, Shirt, PenTool } from "lucide-react"
import { ServiceCategorySection } from "@/components/services/service-category-section"
import { ServicesFaq } from "@/components/services/services-faq"
import { QuickQuoteForm } from "@/components/home/quick-quote-form"
import { TrustSection } from "@/components/home/trust-section"
import { ProcessSection } from "@/components/home/process-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"

export const metadata: Metadata = {
  title: "Services - Custom Patches, Stickers, Apparel & Design",
  description:
    "Explore our complete range of custom branding products: patches, stickers, apparel, and design services. Premium quality backed by decades of expertise.",
}

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "50K+", label: "Orders Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24hr", label: "Quote Response" },
]

// Category 1: Custom Patches
const patchesCategory = {
  id: "patches",
  icon: Layers,
  title: "Custom Patches",
  description: "Premium patches in multiple materials and finishes for uniforms, merchandise, and branding.",
  benefits: [
    "Durable construction using premium materials",
    "Multiple finish options (woven, embroidered, PVC, leather)",
    "Customizable sizes, shapes, and designs",
    "Perfect for uniforms, jackets, bags, and merchandise",
    "Affordable pricing for bulk orders",
  ],
  useCases: [
    "Corporate uniforms and team wear",
    "Military and law enforcement identification",
    "Sports teams and athletic organizations",
    "Promotional merchandise and giveaways",
    "Motorcycle clubs and band merchandise",
  ],
  products: [
    { name: "Custom Patches", href: "/products/custom-patches", image: "/images/custom-patches/custom-patch-2.jpeg", imageAlt: "Custom patches", description: "Versatile patches for any application" },
    { name: "Jacket Patches", href: "/products/custom-jacket-patches", image: "/images/custom-jacket-patches/custom-jacket-patch-6.jpeg", imageAlt: "Jacket patches", description: "Large back patches and sleeve designs" },
    { name: "Embroidered Patches", href: "/products/embroidered-patches", image: "/images/embroidered-patches/embroidered-patch-3.jpeg", imageAlt: "Embroidered patches", description: "Classic stitched designs with premium thread" },
    { name: "Chenille Patches", href: "/products/chenille-patches", image: "/images/chenille-patches/chenille-patch-3.jpeg", imageAlt: "Chenille patches", description: "Soft, textured letterman-style patches" },
    { name: "Leather Patches", href: "/products/leather-patches", image: "/images/leather-patches/leather-patch-1.jpeg", imageAlt: "Leather patches", description: "Premium leather with debossed designs" },
    { name: "Woven Patches", href: "/products/woven-patches", image: "/images/woven-patches/woven-patch-2.jpeg", imageAlt: "Woven patches", description: "Fine detail patches with smooth finish" },
    { name: "Iron On Patches", href: "/products/iron-on-patches", image: "/images/iron-on-patches/iron-on-patch-5.jpeg", imageAlt: "Iron on patches", description: "Easy heat-activated application" },
    { name: "Velcro Patches", href: "/products/velcro-patches", image: "/images/velcro-patches/velcro-patch-1.jpeg", imageAlt: "Velcro patches", description: "Removable hook and loop backing" },
    { name: "PVC Patches", href: "/products/pvc-patches", image: "/images/pvc-patches/pvc-patch-2.jpeg", imageAlt: "PVC patches", description: "Durable rubber 3D patches" },
    { name: "Sublimation Patches", href: "/products/sublimation-patches", image: "/images/sublimation-patches/sublimation-patch-1.jpeg", imageAlt: "Sublimation patches", description: "Full-color photo-quality prints" },
  ],
  galleryImages: [
    { src: "/images/custom-patches/custom-patch-2.jpeg", alt: "Custom embroidered patch showcase" },
    { src: "/images/embroidered-patches/embroidered-patch-3.jpeg", alt: "Embroidered patches collection" },
    { src: "/images/pvc-patches/pvc-patch-2.jpeg", alt: "PVC rubber patches" },
    { src: "/images/chenille-patches/chenille-patch-3.jpeg", alt: "Chenille letterman patches" },
  ],
}

// Category 2: Stickers & Labels
const stickersCategory = {
  id: "stickers",
  icon: Sticker,
  title: "Stickers & Labels",
  description: "High-quality custom stickers and professional labels for products and promotions.",
  benefits: [
    "Premium vinyl material for durability",
    "Weather-resistant and waterproof options",
    "Custom shapes with precise die-cutting",
    "Vibrant full-color printing",
    "Multiple finish options (matte, gloss, holographic)",
  ],
  useCases: [
    "Product packaging and branding",
    "Promotional giveaways and marketing",
    "Retail merchandise and accessories",
    "Event branding and festivals",
    "Personal expression and decor",
  ],
  products: [
    { name: "Die Cut Stickers", href: "/products/die-cut-stickers", image: "/images/die-cut-sticker/die-cut-sticker-5.jpg", imageAlt: "Die cut stickers", description: "Custom-shaped premium vinyl stickers" },
    { name: "Holographic Stickers", href: "/products/holographic-stickers", image: "/images/holographic-sticker/holographic-sticker-6.jpeg", imageAlt: "Holographic stickers", description: "Eye-catching rainbow effect stickers" },
    { name: "Hangtags & Labels", href: "/products/hangtags-labels", image: "/images/hangtags/hangtag-label-1.jpg", imageAlt: "Hangtags and labels", description: "Professional product tags and woven labels" },
  ],
  galleryImages: [
    { src: "/images/die-cut-sticker/die-cut-sticker-5.jpg", alt: "Die cut stickers showcase" },
    { src: "/images/holographic-sticker/holographic-sticker-6.jpeg", alt: "Holographic stickers collection" },
    { src: "/images/hangtags/hangtag-label-1.jpg", alt: "Hangtags and woven labels" },
  ],
}

// Category 3: Custom Apparel
const apparelCategory = {
  id: "apparel",
  icon: Shirt,
  title: "Custom Apparel",
  description: "Premium custom clothing from casual wear to specialty jackets, fully customized to your brand.",
  benefits: [
    "High-quality garments from trusted brands",
    "Multiple decoration methods available",
    "Full customization of colors and styles",
    "Sizes from XS to 5XL available",
    "Perfect for teams, events, and retail",
  ],
  useCases: [
    "Corporate uniforms and professional wear",
    "Sports teams and athletic organizations",
    "Band and music industry merchandise",
    "School and university apparel",
    "Retail and e-commerce brands",
  ],
  products: [
    { name: "Custom Apparel", href: "/products/custom-apparel", image: "/images/custom-apparel/custom-apparel-2.jpeg", imageAlt: "Custom apparel", description: "T-shirts, polos, and branded clothing" },
    { name: "Hoodies & Tracksuits", href: "/products/hoodies-tracksuits", image: "/images/hoodies/hoodies-2.jpg", imageAlt: "Hoodies and tracksuits", description: "Premium comfort wear with custom branding" },
    { name: "Letterman Jackets", href: "/products/letterman-jackets", image: "/images/letterman-jackets/letterman-jacket-1.jpg", imageAlt: "Letterman jackets", description: "Classic varsity style with custom details" },
    { name: "Biker Jackets", href: "/products/biker-jackets", image: "/images/biker-jackets/biker-jacket-4.png", imageAlt: "Biker jackets", description: "Custom leather and textile motorcycle jackets" },
  ],
  galleryImages: [
    { src: "/images/custom-apparel/custom-apparel-2.jpeg", alt: "Custom apparel showcase" },
    { src: "/images/hoodies/hoodies-2.jpg", alt: "Custom hoodies collection" },
    { src: "/images/letterman-jackets/letterman-jacket-1.jpg", alt: "Letterman jackets" },
    { src: "/images/biker-jackets/biker-jacket-4.png", alt: "Custom biker jackets" },
  ],
}

// Category 4: Design Services
const designCategory = {
  id: "design",
  icon: PenTool,
  title: "Design Services",
  description: "Professional design services to bring your vision to life, production-ready.",
  benefits: [
    "Experienced professional designers",
    "Fast turnaround on artwork",
    "Multiple revision rounds included",
    "Production-ready file formats",
    "Free consultation and guidance",
  ],
  useCases: [
    "Logo design and brand identity",
    "Artwork conversion and cleanup",
    "Embroidery digitizing for production",
    "Heat transfer print preparation",
    "Custom illustration and graphics",
  ],
  products: [
    { name: "Vector Art", href: "/products/vector-art", image: "/images/vector-art/vector-art-2.jpeg", imageAlt: "Vector art services", description: "Clean scalable artwork for any application" },
    { name: "Embroidery Digitizing", href: "/products/embroidery-digitizing", image: "/images/embroidery-digitizing/embroidery-digitizing-1.png", imageAlt: "Embroidery digitizing", description: "Convert artwork to stitch-ready files" },
    { name: "Heat Transfer DTF", href: "/products/heat-transfer-dtf-print", image: "/images/heat-dtf/heat-dtf-2.jpeg", imageAlt: "DTF printing", description: "Vibrant full-color garment transfers" },
  ],
  galleryImages: [
    { src: "/images/vector-art/vector-art-2.jpeg", alt: "Vector art conversion" },
    { src: "/images/embroidery-digitizing/embroidery-digitizing-1.png", alt: "Embroidery digitizing service" },
    { src: "/images/heat-dtf/heat-dtf-2.jpeg", alt: "DTF heat transfer prints" },
  ],
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary py-20 text-primary-foreground lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/60">
                Complete Branding Solutions
              </p>
              <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight md:text-5xl">
                Premium Products for Every Brand
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
                From custom patches to premium apparel, we offer a comprehensive range of branding products. Every item is crafted with precision and backed by decades of manufacturing expertise.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="#quote">
                    Get a Free Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                  <Link href="#patches">Explore Products</Link>
                </Button>
              </div>
            </div>
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 p-6 text-center">
                  <p className="font-serif text-3xl font-bold text-accent md:text-4xl">{stat.value}</p>
                  <p className="mt-1 text-sm text-primary-foreground/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="border-b border-border bg-background py-6">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <nav className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            {[
              { id: "patches", label: "Custom Patches", icon: Layers },
              { id: "stickers", label: "Stickers & Labels", icon: Sticker },
              { id: "apparel", label: "Custom Apparel", icon: Shirt },
              { id: "design", label: "Design Services", icon: PenTool },
            ].map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      {/* Category 1: Custom Patches */}
      <ServiceCategorySection {...patchesCategory} />

      {/* Divider */}
      <div className="bg-secondary py-1" />

      {/* Category 2: Stickers & Labels */}
      <ServiceCategorySection {...stickersCategory} reversed />

      {/* Divider */}
      <div className="bg-secondary py-1" />

      {/* Category 3: Custom Apparel */}
      <ServiceCategorySection {...apparelCategory} />

      {/* Divider */}
      <div className="bg-secondary py-1" />

      {/* Category 4: Design Services */}
      <ServiceCategorySection {...designCategory} reversed />

      {/* Trust Section */}
      <TrustSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Quick Quote Form */}
      <div id="quote">
        <QuickQuoteForm />
      </div>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <ServicesFaq />
    </>
  )
}

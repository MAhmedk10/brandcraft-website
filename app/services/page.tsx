import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Layers,
  Sticker,
  Shirt,
  PenTool,
  Check,
  ShieldCheck,
  Factory,
  Eye,
  Heart,
  ImageIcon,
  Users,
  Zap,
  Globe,
} from "lucide-react"
import { TrustSection } from "@/components/home/trust-section"
import { ProcessSection } from "@/components/home/process-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CtaSection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Services - All Products & Solutions",
  description:
    "Explore our complete range of 20+ custom branding products: patches, stickers, apparel, and design services. Premium quality for businesses that demand excellence.",
}

// Product categories with all 20 products
const productCategories = [
  {
    id: "patches",
    icon: Layers,
    title: "Custom Patches",
    description: "Premium patches in multiple materials and finishes for uniforms, merchandise, and branding.",
    products: [
      { name: "Custom Patches", href: "/products/custom-patches", description: "Versatile patches for any application" },
      { name: "Custom Jacket Patches", href: "/products/custom-jacket-patches", description: "Large back patches and sleeve designs" },
      { name: "Embroidered Patches", href: "/products/embroidered-patches", description: "Classic stitched designs with premium thread" },
      { name: "Chenille Patches", href: "/products/chenille-patches", description: "Soft, textured letterman-style patches" },
      { name: "Leather Patches", href: "/products/leather-patches", description: "Premium leather with debossed or laser designs" },
      { name: "Woven Patches", href: "/products/woven-patches", description: "Fine detail patches with smooth finish" },
      { name: "Iron On Patches", href: "/products/iron-on-patches", description: "Easy heat-activated application" },
      { name: "Velcro Patches", href: "/products/velcro-patches", description: "Removable hook and loop backing" },
      { name: "PVC Patches", href: "/products/pvc-patches", description: "Durable rubber 3D patches" },
      { name: "Sublimation Patches", href: "/products/sublimation-patches", description: "Full-color photo-quality prints" },
    ],
  },
  {
    id: "stickers",
    icon: Sticker,
    title: "Stickers & Labels",
    description: "High-quality custom stickers and professional labels for products and promotions.",
    products: [
      { name: "Die Cut Stickers", href: "/products/die-cut-stickers", description: "Custom-shaped premium vinyl stickers" },
      { name: "Holographic Stickers", href: "/products/holographic-stickers", description: "Eye-catching rainbow effect stickers" },
      { name: "Hangtags & Labels", href: "/products/hangtags-labels", description: "Professional product tags and woven labels" },
    ],
  },
  {
    id: "apparel",
    icon: Shirt,
    title: "Custom Apparel",
    description: "Premium custom clothing from casual wear to specialty jackets, fully customized to your brand.",
    products: [
      { name: "Custom Apparel", href: "/products/custom-apparel", description: "T-shirts, polos, and branded clothing" },
      { name: "Hoodies & Tracksuits", href: "/products/hoodies-tracksuits", description: "Premium comfort wear with custom branding" },
      { name: "Letterman Jackets", href: "/products/letterman-jackets", description: "Classic varsity style with custom details" },
      { name: "Biker Jackets", href: "/products/biker-jackets", description: "Custom leather and textile motorcycle jackets" },
    ],
  },
  {
    id: "design",
    icon: PenTool,
    title: "Design Services",
    description: "Professional design services to bring your vision to life, production-ready.",
    products: [
      { name: "Vector Art", href: "/products/vector-art", description: "Clean scalable artwork for any application" },
      { name: "Embroidery Digitizing", href: "/products/embroidery-digitizing", description: "Convert artwork to stitch-ready files" },
      { name: "Heat Transfer DTF", href: "/products/heat-transfer-dtf-print", description: "Vibrant full-color garment transfers" },
    ],
  },
]

const qualityStandards = [
  {
    icon: ShieldCheck,
    title: "Premium Materials",
    description: "We source only the highest-quality materials from trusted suppliers worldwide.",
  },
  {
    icon: Factory,
    title: "Expert Production",
    description: "Traditional craftsmanship combined with modern technology for superior results.",
  },
  {
    icon: Eye,
    title: "Quality Inspection",
    description: "Every product undergoes rigorous inspection before shipping.",
  },
  {
    icon: Heart,
    title: "100% Satisfaction",
    description: "We stand behind every product and are committed to your complete satisfaction.",
  },
]

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "50K+", label: "Orders Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24hr", label: "Quote Response" },
]

const industries = [
  { icon: Users, name: "Corporate & Enterprise" },
  { icon: Shirt, name: "Sports Teams & Clubs" },
  { icon: Factory, name: "Military & Law Enforcement" },
  { icon: Globe, name: "Bands & Music Industry" },
  { icon: Zap, name: "Motorcycle Clubs" },
  { icon: Heart, name: "Schools & Universities" },
]

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
                20+ Premium Products for Your Brand
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
                From custom patches to premium apparel, we offer a comprehensive range of branding products. Every item is crafted with precision and backed by decades of manufacturing expertise.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/contact">
                    Get a Free Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                  <Link href="#products">Explore Products</Link>
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

      {/* Product Categories */}
      <section id="products" className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Our Complete Product Range
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Explore all 20 products across 4 categories, each crafted with premium materials and expert attention to detail.
            </p>
          </div>

          <div className="mt-16 space-y-16">
            {productCategories.map((category, catIndex) => (
              <div key={category.id} id={category.id} className={catIndex % 2 !== 0 ? "rounded-2xl bg-secondary p-8 lg:p-12" : ""}>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <category.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-foreground">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                  {category.products.map((product) => (
                    <Link
                      key={product.name}
                      href={product.href}
                      className="group flex flex-col rounded-lg border border-border bg-card p-5 transition-all hover:border-accent hover:shadow-md"
                    >
                      {/* Placeholder for product image */}
                      <div className="mb-4 flex aspect-square items-center justify-center rounded-md bg-muted">
                        <ImageIcon className="h-8 w-8 text-muted-foreground/30" />
                      </div>
                      <h4 className="font-semibold text-card-foreground group-hover:text-accent">{product.name}</h4>
                      <p className="mt-1 flex-1 text-xs text-muted-foreground">{product.description}</p>
                      <span className="mt-3 inline-flex items-center text-xs font-medium text-accent">
                        Learn more <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-secondary-foreground md:text-4xl">
              Industries We Serve
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Trusted by organizations across diverse industries for quality and reliability.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {industries.map((industry) => (
              <div key={industry.name} className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-6 text-center">
                <industry.icon className="h-8 w-8 text-accent" />
                <p className="text-sm font-medium text-card-foreground">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <TrustSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Quality Standards */}
      <section className="bg-primary py-20 text-primary-foreground lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
              Our Commitment to Quality
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/70">
              Every project we undertake is held to the highest standards of craftsmanship.
            </p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {qualityStandards.map((standard) => (
              <div key={standard.title} className="flex flex-col gap-4 rounded-lg border border-primary-foreground/10 p-6">
                <standard.icon className="h-8 w-8 text-accent" />
                <h3 className="font-serif text-lg font-semibold">{standard.title}</h3>
                <p className="text-sm leading-relaxed text-primary-foreground/70">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Why Choose Us - Feature List */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Why Businesses Choose Us
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We combine traditional craftsmanship with modern technology to deliver exceptional results every time.
              </p>
              <ul className="mt-8 flex flex-col gap-4">
                {[
                  "No minimum order requirements on most products",
                  "Free design assistance and mockups",
                  "Fast turnaround times without compromising quality",
                  "Competitive pricing for bulk orders",
                  "Dedicated account manager for every project",
                  "Worldwide shipping with tracking",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex aspect-square items-center justify-center rounded-lg bg-muted">
                  <ImageIcon className="h-12 w-12 text-muted-foreground/30" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaSection />
    </>
  )
}

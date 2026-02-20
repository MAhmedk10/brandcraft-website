import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Layers,
  Palette,
  Printer,
  Shirt,
  Check,
  ShieldCheck,
  Factory,
  Eye,
  Heart,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive custom branding solutions: custom patches, logo design, printing, and embroidery services for businesses that demand quality.",
}

const services = [
  {
    id: "patches",
    icon: Layers,
    title: "Custom Patches",
    description:
      "Custom patches are a versatile branding solution perfect for uniforms, merchandise, promotional items, and team identification. We create durable, professionally designed patches that represent your brand with precision and pride.",
    benefits: [
      "Durable construction using premium materials",
      "Multiple finish options (woven, embroidered, PVC, rubber)",
      "Customizable sizes, shapes, and designs",
      "Perfect for uniforms, jackets, bags, and merchandise",
      "Affordable for bulk orders",
    ],
    useCases: [
      "Corporate uniforms and team wear",
      "Military and law enforcement identification",
      "Sports teams and athletic organizations",
      "Promotional merchandise and giveaways",
      "Brand loyalty and membership programs",
    ],
    options: [
      "Material selection (woven, embroidered, PVC, rubber, twill)",
      "Size and shape (standard or custom die-cut)",
      "Backing options (velcro, iron-on, sew-on)",
      "Color matching to brand specifications",
      "Quantity from small orders to large production runs",
    ],
    cta: "Request a Patch Quote",
    image: "/images/portfolio-1.jpg",
    imageAlt: "Custom embroidered and woven patches in various designs",
  },
  {
    id: "logos",
    icon: Palette,
    title: "Logo Design & Creation",
    description:
      "A strong logo is the foundation of your brand identity. Our design team creates custom logos that capture your brand essence and work across all applications\u2014from embroidery to printing to digital use.",
    benefits: [
      "Professional design from experienced creatives",
      "Multiple design concepts and revisions",
      "Logos optimized for all applications",
      "Digital files ready for production",
      "Brand guidelines documentation included",
    ],
    useCases: [
      "New business branding and identity",
      "Brand refresh and modernization",
      "Logos for merchandise and apparel",
      "Digital and print applications",
      "Embroidery and patch production",
    ],
    options: [
      "Full custom design from scratch",
      "Logo redesign and modernization",
      "Design concepts tailored to your industry",
      "Multiple format delivery (vector, raster, embroidery-ready)",
      "Color variations and monochrome versions",
    ],
    cta: "Start Your Logo Design",
    image: "/images/portfolio-4.jpg",
    imageAlt: "Custom logo designs displayed on various materials",
  },
  {
    id: "printing",
    icon: Printer,
    title: "Printing Services",
    description:
      "From screen printing to digital printing, we deliver vibrant, durable prints on apparel, merchandise, and promotional materials. Our printing solutions combine quality craftsmanship with modern technology.",
    benefits: [
      "High-quality screen printing and digital printing",
      "Vibrant colors and sharp detail",
      "Durable prints that withstand washing and wear",
      "Fast turnaround on orders",
      "Flexible quantities from small to large runs",
    ],
    useCases: [
      "Corporate apparel and uniforms",
      "Team merchandise and promotional items",
      "Event merchandise and branded giveaways",
      "Retail merchandise production",
      "Custom promotional products",
    ],
    options: [
      "Screen printing for bulk orders",
      "Digital printing for small runs and full-color designs",
      "Apparel types (t-shirts, hoodies, hats, bags)",
      "Placement options (front, back, sleeves)",
      "Color matching and design optimization",
    ],
    cta: "Get a Printing Quote",
    image: "/images/portfolio-3.jpg",
    imageAlt: "Screen-printed apparel and merchandise with custom designs",
  },
  {
    id: "embroidery",
    icon: Shirt,
    title: "Embroidery Services",
    description:
      "Premium embroidery adds sophistication and durability to corporate wear, team uniforms, and branded merchandise. Our precision embroidery combines traditional craftsmanship with modern technology.",
    benefits: [
      "High-quality embroidery with precision stitching",
      "Premium thread and materials",
      "Professional appearance suitable for corporate environments",
      "Durable and long-lasting",
      "Perfect for uniforms, polos, and branded wear",
    ],
    useCases: [
      "Corporate uniforms and professional wear",
      "Team uniforms and sports apparel",
      "Branded merchandise and promotional items",
      "Executive gifts and premium merchandise",
      "Professional identification and branding",
    ],
    options: [
      "Thread color selection from extensive palette",
      "Stitch density and detail options",
      "Placement on garments (chest, sleeve, back)",
      "Garment types (polos, jackets, caps, bags)",
      "Quantity from single items to large production runs",
    ],
    cta: "Request an Embroidery Quote",
    image: "/images/portfolio-2.jpg",
    imageAlt: "Precision embroidered corporate wear and branded apparel",
  },
]

const qualityStandards = [
  {
    icon: ShieldCheck,
    title: "Materials",
    description:
      "We source only premium materials from trusted suppliers. Every material is inspected for quality before production begins.",
  },
  {
    icon: Factory,
    title: "Production Process",
    description:
      "Our manufacturing process combines traditional techniques with modern technology. Each step is carefully monitored to ensure consistency and precision.",
  },
  {
    icon: Eye,
    title: "Quality Inspection",
    description:
      "Every finished product undergoes rigorous quality inspection before shipment. We check for color accuracy, stitch quality, durability, and overall finish.",
  },
  {
    icon: Heart,
    title: "Customer Satisfaction",
    description:
      "Your satisfaction is our priority. We stand behind every product we create and are committed to making things right if any issues arise.",
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative bg-primary py-20 text-primary-foreground lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/60">
              What We Offer
            </p>
            <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight md:text-5xl">
              Our Services
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
              Comprehensive custom branding solutions designed for businesses that demand quality. Whether you need custom patches, logo design, printing, or embroidery, we deliver premium results backed by decades of manufacturing expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg leading-relaxed text-muted-foreground">
              We specialize in creating high-quality, custom branding solutions for businesses, teams, and organizations of all sizes. From initial design concept to final delivery, we handle every aspect of the customization process with precision and professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Individual Services */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={index % 2 === 0 ? "bg-secondary py-20 lg:py-28" : "bg-background py-20 lg:py-28"}
        >
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className={`grid items-start gap-12 lg:grid-cols-2 ${index % 2 !== 0 ? "lg:direction-rtl" : ""}`}>
              {/* Content side */}
              <div className={`flex flex-col gap-8 ${index % 2 !== 0 ? "lg:order-2" : ""}`}>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                    {service.title}
                  </h2>
                </div>

                <p className="text-base leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                {/* Benefits */}
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                    Key Benefits
                  </h3>
                  <ul className="mt-3 flex flex-col gap-2">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Use Cases */}
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                    Use Cases
                  </h3>
                  <ul className="mt-3 flex flex-col gap-2">
                    {service.useCases.map((useCase) => (
                      <li key={useCase} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="w-fit bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <Link href="/contact">
                    {service.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* Image side */}
              <div className={`relative aspect-[4/3] overflow-hidden rounded-lg ${index % 2 !== 0 ? "lg:order-1" : ""}`}>
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Quality Standards */}
      <section className="bg-primary py-20 text-primary-foreground lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
              Our Commitment to Quality
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/70">
              Every project we undertake is held to the highest standards of craftsmanship and quality.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {qualityStandards.map((standard) => (
              <div key={standard.title} className="flex flex-col gap-4 rounded-lg border border-primary-foreground/10 p-6">
                <standard.icon className="h-8 w-8 text-accent" />
                <h3 className="font-serif text-lg font-semibold">{standard.title}</h3>
                <p className="text-sm leading-relaxed text-primary-foreground/70">
                  {standard.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {"Let's bring your branding vision to life. Contact our team today to discuss your project requirements and get a detailed quote."}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">
                Request a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

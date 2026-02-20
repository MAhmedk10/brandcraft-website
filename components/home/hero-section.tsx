import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text content */}
          <div className="flex flex-col gap-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/60">
              Premium Custom Manufacturing
            </p>
            <h1 className="text-balance font-serif text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Premium Custom Branding Solutions for Ambitious Brands
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-primary-foreground/80">
              High-quality patches, logos, printing, and embroidery designed to elevate your brand identity. From concept to delivery, we create customized branding that makes an impact.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link href="/contact">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
            <p className="text-sm text-primary-foreground/50">
              Trusted by leading businesses and organizations.
            </p>
          </div>

          {/* Hero image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg lg:aspect-square">
            <Image
              src="/images/hero-home.jpg"
              alt="Custom branded patches, embroidered items, and printed materials showcasing premium craftsmanship"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-primary-foreground/10" />
          </div>
        </div>
      </div>
    </section>
  )
}

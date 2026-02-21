import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface ProductHeroProps {
  title: string
  description: string
  valueProposition: string
  ctaText: string
}

export function ProductHero({ title, description, valueProposition, ctaText }: ProductHeroProps) {
  return (
    <section className="relative bg-primary py-20 text-primary-foreground lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/60">
            {valueProposition}
          </p>
          <h1 className="mt-4 text-balance font-serif text-4xl font-bold tracking-tight md:text-5xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link href="/contact">
                {ctaText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

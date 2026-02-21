import { Star, Quote } from "lucide-react"
import type { ProductTestimonial } from "@/lib/products-data"

interface ProductTestimonialsProps {
  testimonials: ProductTestimonial[]
}

export function ProductTestimonials({ testimonials }: ProductTestimonialsProps) {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-secondary-foreground md:text-4xl">
            What Our Clients Say
          </h2>
        </div>
        <div className="mx-auto mt-14 grid max-w-4xl gap-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-lg border border-border bg-card px-8 pb-10 pt-10"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <div className="relative mt-8 flex-1">
                <Quote className="absolute -left-1 -top-2 h-8 w-8 text-border" />
                <p className="pl-10 text-base leading-relaxed text-card-foreground">
                  {t.quote}
                </p>
              </div>
              <div className="mt-10 flex items-center gap-4 border-t border-border pt-8">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-sm font-bold">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">{t.name}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "The quality exceeded our expectations. The patches arrived on time, and the attention to detail was outstanding. We'll definitely be ordering again.",
    name: "Sarah Mitchell",
    role: "Marketing Director",
    company: "TechCorp Solutions",
  },
  {
    quote:
      "Working with this team was seamless. They understood our brand vision immediately and delivered exactly what we needed. Highly recommended.",
    name: "James Rodriguez",
    role: "Operations Manager",
    company: "Elite Logistics",
  },
  {
    quote:
      "We've used them for multiple projects over the past three years. Consistent quality, professional service, and always reliable. They're our go-to partner.",
    name: "Amanda Chen",
    role: "Brand Manager",
    company: "Heritage Apparel Co.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-secondary-foreground md:text-4xl">
            What Our Clients Say
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col rounded-lg border border-border bg-card px-8 pb-10 pt-10"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <div className="relative mt-8 flex-1">
                <Quote className="absolute -left-1 -top-2 h-8 w-8 text-border" />
                <p className="pl-10 text-base leading-relaxed text-card-foreground">
                  {testimonial.quote}
                </p>
              </div>

              {/* Attribution */}
              <div className="mt-10 flex items-center gap-4 border-t border-border pt-8">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-sm font-bold">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">
                    {testimonial.name}
                  </p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
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

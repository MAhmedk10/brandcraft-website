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
              className="flex flex-col gap-6 rounded-lg border border-border bg-card p-8"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <div className="relative flex-1">
                <Quote className="absolute -left-1 -top-1 h-6 w-6 text-border" />
                <p className="pl-6 text-sm leading-relaxed text-card-foreground">
                  {testimonial.quote}
                </p>
              </div>

              {/* Attribution */}
              <div className="flex items-center gap-3 border-t border-border pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-xs font-bold">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-card-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
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

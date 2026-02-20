import { Award, Gem, Clock, HeartHandshake } from "lucide-react"

const trustPillars = [
  {
    icon: Award,
    title: "20+ Years of Industry Experience",
    description: "Proven expertise in custom manufacturing and brand customization.",
  },
  {
    icon: Gem,
    title: "Premium Materials & Craftsmanship",
    description: "We use only the highest-quality materials and precision techniques.",
  },
  {
    icon: Clock,
    title: "Fast, Reliable Turnaround",
    description: "Consistent delivery timelines without compromising quality.",
  },
  {
    icon: HeartHandshake,
    title: "100% Customer Satisfaction",
    description: "Dedicated support from quote to final delivery.",
  },
]

export function TrustSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Why Leading Brands Choose Us
          </h2>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="flex flex-col items-center gap-4 rounded-lg border border-border bg-card p-8 text-center transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <pillar.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-card-foreground">
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

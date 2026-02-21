import { ShieldCheck } from "lucide-react"

interface ProductWhyChooseUsProps {
  items: { title: string; description: string }[]
}

export function ProductWhyChooseUs({ items }: ProductWhyChooseUsProps) {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Why Choose Us
          </h2>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center gap-4 rounded-lg border border-border bg-card p-8 text-center transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <ShieldCheck className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-card-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

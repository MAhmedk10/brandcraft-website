import { Sparkles } from "lucide-react"

interface ProductKeyFeaturesProps {
  features: { title: string; description: string }[]
}

export function ProductKeyFeatures({ features }: ProductKeyFeaturesProps) {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Key Features
          </h2>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col gap-4 rounded-lg border border-border bg-card p-8 transition-shadow hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent/10">
                <Sparkles className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-card-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

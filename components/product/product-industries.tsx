import { Building2 } from "lucide-react"

interface ProductIndustriesProps {
  industries: string[]
}

export function ProductIndustries({ industries }: ProductIndustriesProps) {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Industries We Serve
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Trusted by organizations across a wide range of industries.
          </p>
        </div>
        <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <div
              key={industry}
              className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3"
            >
              <Building2 className="h-4 w-4 shrink-0 text-accent" />
              <span className="text-sm font-medium text-card-foreground">
                {industry}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

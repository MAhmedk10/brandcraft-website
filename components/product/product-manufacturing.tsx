import { Check } from "lucide-react"

interface ProductManufacturingProps {
  steps: string[]
}

export function ProductManufacturing({ steps }: ProductManufacturingProps) {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-secondary-foreground md:text-4xl">
              Manufacturing Process
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A transparent look at how we produce your order from start to finish.
            </p>
          </div>
          <div className="flex flex-col gap-0">
            {steps.map((step, index) => (
              <div key={step} className="relative flex gap-4 pb-8 last:pb-0">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-[13px] top-7 h-full w-px bg-border" />
                )}
                {/* Step indicator */}
                <div className="relative z-10 mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <p className="pt-0.5 text-sm leading-relaxed text-secondary-foreground">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

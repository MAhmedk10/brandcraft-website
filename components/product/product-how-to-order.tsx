import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare, PenTool, Factory, PackageCheck } from "lucide-react"

const stepIcons = [MessageSquare, PenTool, Factory, PackageCheck]

interface ProductHowToOrderProps {
  steps: { number: string; title: string; description: string }[]
  ctaText: string
}

export function ProductHowToOrder({ steps, ctaText }: ProductHowToOrderProps) {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            How to Order
          </h2>
        </div>

        <div className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = stepIcons[index % stepIcons.length]
            return (
              <div
                key={step.number}
                className="relative flex flex-col items-center gap-4 text-center"
              >
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-8 hidden h-px w-full bg-border lg:block" />
                )}
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Step {step.number}
                </span>
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mt-14 text-center">
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
        </div>
      </div>
    </section>
  )
}

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare, PenTool, Factory, PackageCheck } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Consultation & Design",
    description:
      "Share your vision. We discuss requirements, materials, and design preferences.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Design Approval",
    description:
      "We create mockups and design files for your review and approval.",
  },
  {
    number: "03",
    icon: Factory,
    title: "Production",
    description:
      "Using premium materials and precision techniques, we manufacture your order.",
  },
  {
    number: "04",
    icon: PackageCheck,
    title: "Quality Check & Delivery",
    description:
      "Final inspection ensures perfection before your products ship.",
  },
]

export function ProcessSection() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-secondary-foreground md:text-4xl">
            Your Journey From Idea to Finished Product
          </h2>
        </div>

        <div className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex flex-col items-center gap-4 text-center">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-8 hidden h-px w-full bg-border lg:block" />
              )}

              {/* Step number circle */}
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <step.icon className="h-6 w-6" />
              </div>

              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Step {step.number}
              </span>
              <h3 className="font-serif text-lg font-semibold text-secondary-foreground">
                {step.title}
              </h3>
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/contact">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

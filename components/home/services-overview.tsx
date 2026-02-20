import Link from "next/link"
import { Layers, Palette, Printer, Shirt, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Layers,
    title: "Custom Patches",
    description:
      "Durable, professionally designed patches for uniforms, merchandise, and branding. Available in multiple materials and finishes.",
    href: "/services#patches",
  },
  {
    icon: Palette,
    title: "Logo Design & Creation",
    description:
      "Custom logo design that captures your brand identity. From concept to final artwork ready for production.",
    href: "/services#logos",
  },
  {
    icon: Printer,
    title: "Printing Solutions",
    description:
      "High-quality screen printing and digital printing for apparel, merchandise, and promotional materials.",
    href: "/services#printing",
  },
  {
    icon: Shirt,
    title: "Embroidery Services",
    description:
      "Precision embroidery for corporate wear, team uniforms, and branded merchandise. Premium thread and stitching.",
    href: "/services#embroidery",
  },
]

export function ServicesOverview() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-secondary-foreground md:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Complete branding solutions tailored to your needs.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col gap-4 rounded-lg border border-border bg-card p-8 transition-all hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-card-foreground">
                {service.title}
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <Button
                asChild
                variant="ghost"
                className="w-fit p-0 text-foreground hover:bg-transparent hover:text-accent"
              >
                <Link href={service.href}>
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
import { Check } from "lucide-react"

const differentiators = [
  {
    title: "Premium Materials",
    description:
      "We source only high-grade materials to ensure durability and professional appearance.",
  },
  {
    title: "Skilled Craftsmanship",
    description:
      "Our team combines traditional techniques with modern technology for superior results.",
  },
  {
    title: "Full Design Flexibility",
    description:
      "Custom designs tailored to your exact specifications and brand guidelines.",
  },
  {
    title: "Reliable Delivery",
    description:
      "Consistent timelines and quality across every project, large or small.",
  },
  {
    title: "Professional Support",
    description:
      "Dedicated account support from initial consultation through project completion.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/images/hero-about.jpg"
              alt="Professional craftsperson inspecting custom branding products in a manufacturing facility"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                What Sets Us Apart
              </h2>
            </div>
            <ul className="flex flex-col gap-6">
              {differentiators.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10">
                    <Check className="h-3.5 w-3.5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Mail, Phone, MapPin } from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description:
      "Send us an email with your project details and we'll respond within 24 business hours.",
    details: "contact@brandcraft.com",
  },
  {
    icon: Phone,
    title: "Phone",
    description:
      "Speak directly with our team for immediate assistance or project consultation.",
    details: "(555) 123-4567",
    extra: "Monday - Friday, 9 AM - 5 PM EST",
  },
  {
    icon: MapPin,
    title: "Mailing Address",
    description: "Visit our facility or send correspondence to:",
    details: "BrandCraft Co.",
    extra: "123 Manufacturing Blvd, Suite 100, Charlotte, NC 28202",
  },
]

export function ContactInfo() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Get in Touch
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {contactMethods.map((method) => (
            <div
              key={method.title}
              className="flex flex-col items-center gap-4 rounded-lg border border-border bg-card p-8 text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <method.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-card-foreground">
                {method.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {method.description}
              </p>
              <p className="font-semibold text-card-foreground">{method.details}</p>
              {method.extra && (
                <p className="text-xs text-muted-foreground">{method.extra}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

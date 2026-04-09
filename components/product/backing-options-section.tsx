import Image from "next/image"
import { ImageIcon } from "lucide-react"

export interface BackingOption {
  name: string
  description: string
  bestFor: string
  keyBenefit: string
  image?: string
}

// Standard backing options used across all patch products
export const standardBackingOptions: BackingOption[] = [
  {
    name: "Sew-On Backing",
    description:
      "Traditional stitched attachment for maximum durability and versatility. Perfect for uniforms, jackets, and garments that will endure heavy wear. Works on any fabric surface. No special equipment needed—just needle and thread.",
    bestFor: "Uniforms, jackets, professional wear, heritage applications",
    keyBenefit: "Most durable, reusable, works on any surface",
    image: "/images/backing-options/backing-sewon-option.png",
  },
  {
    name: "Iron-On Backing",
    description:
      "Heat-activated adhesive backing for quick, hassle-free application. Simply place your patch and apply heat with an iron or heat press. Perfect for DIY projects, promotional merchandise, and fast turnaround orders. Creates a strong, permanent bond.",
    bestFor: "T-shirts, hoodies, casual apparel, promotional items, DIY projects",
    keyBenefit: "Quick application, no sewing required, professional results",
    image: "/images/backing-options/backing-ironon-option.png",
  },
  {
    name: "Peel & Stick Backing",
    description:
      "Self-adhesive backing that requires zero equipment. Simply peel the protective backing and press your patch in place. Ideal for quick applications, temporary use, or surfaces where heat application isn't possible. Strong initial bond, suitable for most surfaces.",
    bestFor: "Caps, bags, temporary applications, events, costumes, non-fabric surfaces",
    keyBenefit: "Instant application, no tools required, versatile surfaces",
    image: "/images/backing-options/backing-peelstick-option.png",
  },
  {
    name: "Velcro Backing",
    description:
      "Removable hook or loop backing for repeated attachment and detachment. Perfect for uniforms, tactical gear, or any application requiring flexibility. Install the loop base once, then swap patches as needed. Ideal for rotating designs or seasonal updates.",
    bestFor: "Military/tactical gear, uniforms, modular designs, swappable patches",
    keyBenefit: "Reusable, removable, professional appearance",
    image: "/images/backing-options/backing-velcro-option.png",
  },
]

interface BackingOptionsSectionProps {
  options?: BackingOption[]
}

export function BackingOptionsSection({
  options = standardBackingOptions,
}: BackingOptionsSectionProps) {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-secondary-foreground md:text-4xl">
            Backing Options
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Choose How Your Patches Attach
          </p>
        </div>

        {/* Grid - 4 columns on desktop */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {options.map((option) => (
            <div
              key={option.name}
              className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-muted">
                {option.image ? (
                  <Image
                    src={option.image}
                    alt={option.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted-foreground/40">
                    <ImageIcon className="h-12 w-12" />
                    <span className="text-xs font-medium">Image Coming Soon</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-grow flex-col gap-3 p-5">
                <h3 className="font-serif text-lg font-semibold text-card-foreground">
                  {option.name}
                </h3>
                <p className="flex-grow text-sm leading-relaxed text-muted-foreground">
                  {option.description}
                </p>

                {/* Best For */}
                <div className="border-t border-border pt-3">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold text-card-foreground">Best For:</span>{" "}
                    {option.bestFor}
                  </p>
                </div>

                {/* Key Benefit */}
                <p className="text-xs font-medium text-accent">{option.keyBenefit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

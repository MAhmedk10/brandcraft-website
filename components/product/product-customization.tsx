import Image from "next/image"
import { Settings2, ImageIcon } from "lucide-react"

interface ProductCustomizationProps {
  options: string[]
  /** Optional image path for the product customization visual, e.g. "/images/products/custom-patches-options.jpg" */
  image?: string
  imageAlt?: string
}

export function ProductCustomization({ options, image, imageAlt }: ProductCustomizationProps) {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-secondary-foreground md:text-4xl">
              Customization Options
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Every detail is yours to customize. We work with your specifications to deliver exactly what you envision.
            </p>
            {/* Product image placeholder */}
            <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-lg bg-muted">
              {image ? (
                <Image
                  src={image}
                  alt={imageAlt || "Product customization options"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted-foreground/40">
                  <ImageIcon className="h-12 w-12" />
                  <span className="text-xs font-medium">Product Image Coming Soon</span>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {options.map((option) => {
              const [label, ...rest] = option.split(": ")
              const detail = rest.join(": ")
              return (
                <div
                  key={option}
                  className="flex items-start gap-4 rounded-lg border border-border bg-card p-5"
                >
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
                    <Settings2 className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground">{label}</p>
                    {detail && (
                      <p className="mt-0.5 text-sm text-muted-foreground">{detail}</p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

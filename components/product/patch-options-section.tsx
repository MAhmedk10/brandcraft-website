import Image from "next/image"
import { ImageIcon } from "lucide-react"

export interface PatchOption {
  name: string
  description: string
  image?: string
}

interface PatchOptionsSectionProps {
  productTitle: string
  options: PatchOption[]
}

export function PatchOptionsSection({ productTitle, options }: PatchOptionsSectionProps) {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {productTitle} Options
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Choose Your Perfect Style
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted-foreground/40">
                    <ImageIcon className="h-12 w-12" />
                    <span className="text-xs font-medium">Image Coming Soon</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-grow flex-col gap-2 p-5">
                <h3 className="font-serif text-lg font-semibold text-card-foreground">
                  {option.name}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {option.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

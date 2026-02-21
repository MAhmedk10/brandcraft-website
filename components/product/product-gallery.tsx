import { ImageIcon } from "lucide-react"

interface ProductGalleryProps {
  items: { alt: string; caption: string }[]
}

export function ProductGallery({ items }: ProductGalleryProps) {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Gallery
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            See examples of our work and the quality we deliver.
          </p>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.caption}
              className="group relative flex aspect-[4/3] flex-col items-center justify-center gap-3 overflow-hidden rounded-lg bg-muted text-muted-foreground/40"
            >
              {/* Placeholder — replace with <Image> when photos are added */}
              <ImageIcon className="h-12 w-12" />
              <span className="text-xs font-medium">{item.caption}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

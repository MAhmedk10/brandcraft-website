import Image from "next/image"

const portfolioItems = [
  {
    src: "/images/portfolio-1.jpg",
    alt: "Custom embroidered patches in various designs and styles",
    caption: "Custom Embroidered Patches",
  },
  {
    src: "/images/portfolio-2.jpg",
    alt: "Corporate polo shirts with precision logo embroidery",
    caption: "Corporate Uniform Embroidery",
  },
  {
    src: "/images/portfolio-3.jpg",
    alt: "Screen-printed t-shirts and hoodies with custom brand designs",
    caption: "Custom Screen-Printed Apparel",
  },
  {
    src: "/images/portfolio-4.jpg",
    alt: "PVC and woven patches in various shapes displayed on dark surface",
    caption: "Premium Woven & PVC Patches",
  },
  {
    src: "/images/portfolio-5.jpg",
    alt: "Embroidered caps and hats with custom logo designs",
    caption: "Embroidered Caps & Headwear",
  },
  {
    src: "/images/portfolio-6.jpg",
    alt: "Collection of custom branded merchandise including bags and jackets",
    caption: "Branded Merchandise Collection",
  },
]

export function PortfolioSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Recent Work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            See the quality and variety of projects we{"'"}ve completed.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <div
              key={item.caption}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-end bg-primary/0 p-6 transition-all duration-300 group-hover:bg-primary/70">
                <p className="translate-y-4 text-sm font-semibold text-primary-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

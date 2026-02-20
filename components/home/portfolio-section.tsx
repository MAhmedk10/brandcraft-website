import Image from "next/image"

const portfolioItems = [
  {
    src: "/images/portfolio-1.jpg",
    alt: "Custom embroidered patches in various designs and styles",
    caption: "Custom Embroidered Patches",
    tag: "Patches",
  },
  {
    src: "/images/portfolio-2.jpg",
    alt: "Corporate polo shirts with precision logo embroidery",
    caption: "Corporate Uniform Embroidery",
    tag: "Embroidery",
  },
  {
    src: "/images/portfolio-3.jpg",
    alt: "Screen-printed t-shirts and hoodies with custom brand designs",
    caption: "Custom Screen-Printed Apparel",
    tag: "Printing",
  },
  {
    src: "/images/portfolio-4.jpg",
    alt: "PVC and woven patches in various shapes displayed on dark surface",
    caption: "Premium Woven & PVC Patches",
    tag: "Patches",
  },
  {
    src: "/images/portfolio-5.jpg",
    alt: "Embroidered caps and hats with custom logo designs",
    caption: "Embroidered Caps & Headwear",
    tag: "Embroidery",
  },
  {
    src: "/images/portfolio-6.jpg",
    alt: "Collection of custom branded merchandise including bags and jackets",
    caption: "Branded Merchandise Collection",
    tag: "Full Branding",
  },
]

function BentoCard({
  item,
  className,
  sizes,
}: {
  item: (typeof portfolioItems)[number]
  className?: string
  sizes: string
}) {
  return (
    <div className={`group relative overflow-hidden rounded-lg ${className ?? ""}`}>
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes={sizes}
      />
      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-primary/80 via-primary/20 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="mb-1 w-fit rounded-full bg-accent px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-accent-foreground">
          {item.tag}
        </span>
        <p className="text-sm font-semibold text-primary-foreground">
          {item.caption}
        </p>
      </div>
      {/* Permanent subtle tag in corner */}
      <div className="absolute right-3 top-3 rounded-full bg-primary/70 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-0">
        {item.tag}
      </div>
    </div>
  )
}

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

        {/* Bento Grid */}
        <div className="mt-14 grid auto-rows-[180px] gap-3 sm:auto-rows-[220px] md:grid-cols-4 lg:auto-rows-[260px]">
          {/* Large: spans 2 cols, 2 rows */}
          <BentoCard
            item={portfolioItems[0]}
            className="md:col-span-2 md:row-span-2"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Standard */}
          <BentoCard
            item={portfolioItems[1]}
            className="md:col-span-1 md:row-span-1"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
          {/* Standard */}
          <BentoCard
            item={portfolioItems[2]}
            className="md:col-span-1 md:row-span-1"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
          {/* Tall: spans 1 col, 2 rows */}
          <BentoCard
            item={portfolioItems[3]}
            className="md:col-span-1 md:row-span-2"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
          {/* Standard */}
          <BentoCard
            item={portfolioItems[4]}
            className="md:col-span-1 md:row-span-1"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
          {/* Wide: spans 2 cols, 1 row */}
          <BentoCard
            item={portfolioItems[5]}
            className="md:col-span-2 md:row-span-1"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  )
}

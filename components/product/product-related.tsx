import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { ProductData } from "@/lib/products-data"

interface ProductRelatedProps {
  products: ProductData[]
}

export function ProductRelated({ products }: ProductRelatedProps) {
  if (products.length === 0) return null

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Related Services
          </h2>
        </div>
        <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group flex flex-col gap-4 rounded-lg border border-border bg-card p-6 transition-all hover:shadow-md"
            >
              <h3 className="font-serif text-lg font-semibold text-card-foreground">
                {product.title}
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                {product.valueProposition}
              </p>
              <span className="inline-flex items-center text-sm font-medium text-foreground group-hover:text-accent">
                Learn More
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

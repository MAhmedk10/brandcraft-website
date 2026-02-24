"use client"

import { useCallback, useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowLeft, ArrowRight, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  { title: "Custom Patches", href: "/products/custom-patches", image: "/images/custom-patches/custom-patch-2.jpeg", imageAlt: "Custom patches" },
  { title: "Jacket Patches", href: "/products/custom-jacket-patches", image: "/images/custom-jacket-patches/custom-jacket-patch-6.jpeg", imageAlt: "Jacket patches" },
  { title: "Embroidered Patches", href: "/products/embroidered-patches", image: "/images/embroidered-patches/embroidered-patch-3.jpeg", imageAlt: "Embroidered patches" },
  { title: "Chenille Patches", href: "/products/chenille-patches", image: "/images/chenille-patches/chenille-patch-3.jpeg", imageAlt: "Chenille patches" },
  { title: "Leather Patches", href: "/products/leather-patches", image: "/images/leather-patches/leather-patch-1.jpeg", imageAlt: "Leather patches" },
  { title: "Woven Patches", href: "/products/woven-patches", image: "/images/woven-patches/woven-patch-2.jpeg", imageAlt: "Woven patches" },
  { title: "Iron On Patches", href: "/products/iron-on-patches", image: "/images/iron-on-patches/iron-on-patch-5.jpeg", imageAlt: "Iron on patches" },
  { title: "Velcro Patches", href: "/products/velcro-patches", image: "/images/velcro-patches/velcro-patch-1.jpeg", imageAlt: "Velcro patches" },
  { title: "PVC Patches", href: "/products/pvc-patches", image: "/images/pvc-patches/pvc-patch-2.jpeg", imageAlt: "PVC patches" },
  { title: "Sublimation Patches", href: "/products/sublimation-patches", image: "/images/sublimation-patches/sublimation-patch-1.jpeg", imageAlt: "Sublimation patches" },
  { title: "Die Cut Stickers", href: "/products/die-cut-stickers", image: "", imageAlt: "Die cut stickers" },
  { title: "Holographic Stickers", href: "/products/holographic-stickers", image: "", imageAlt: "Holographic stickers" },
  { title: "Hangtags & Labels", href: "/products/hangtags-labels", image: "", imageAlt: "Hangtags and labels" },
  { title: "Custom Apparel", href: "/products/custom-apparel", image: "", imageAlt: "Custom apparel" },
  { title: "Hoodies & Tracksuits", href: "/products/hoodies-tracksuits", image: "", imageAlt: "Hoodies and tracksuits" },
  { title: "Letterman Jackets", href: "/products/letterman-jackets", image: "", imageAlt: "Letterman jackets" },
  { title: "Biker Jackets", href: "/products/biker-jackets", image: "", imageAlt: "Biker jackets" },
  { title: "Vector Art", href: "/products/vector-art", image: "", imageAlt: "Vector art services" },
  { title: "Embroidery Digitizing", href: "/products/embroidery-digitizing", image: "", imageAlt: "Embroidery digitizing" },
  { title: "Heat Transfer DTF", href: "/products/heat-transfer-dtf-print", image: "", imageAlt: "DTF printing" },
]

export function ServicesOverview() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
    containScroll: false,
  })
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanPrev(emblaApi.canScrollPrev())
    setCanNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header with nav arrows */}
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-secondary-foreground md:text-4xl">
              Our Products
            </h2>
            <p className="mt-3 max-w-xl text-lg text-muted-foreground">
              Browse our full range of custom branding solutions.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canPrev}
              aria-label="Previous products"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground disabled:opacity-40 disabled:hover:bg-card disabled:hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canNext}
              aria-label="Next products"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground disabled:opacity-40 disabled:hover:bg-card disabled:hover:text-foreground"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="mt-10 overflow-hidden" ref={emblaRef}>
          <div className="-ml-4 flex">
            {products.map((product) => (
              <div
                key={product.href}
                className="min-w-0 flex-[0_0_85%] pl-4 sm:flex-[0_0_45%] lg:flex-[0_0_30%]"
              >
                <Link href={product.href} className="group block">
                  <div className="overflow-hidden rounded-lg border border-border bg-card transition-all hover:shadow-lg">
                    {/* Image area */}
                    <div className="relative aspect-[3/2] overflow-hidden bg-muted">
                      {product.image ? (
                        <Image
                          src={product.image}
                          alt={product.imageAlt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 30vw"
                        />
                      ) : (
                        <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted-foreground/40">
                          <ImageIcon className="h-10 w-10" />
                          <span className="text-xs font-medium">Image Coming Soon</span>
                        </div>
                      )}
                    </div>
                    {/* Content */}
                    <div className="flex items-center justify-between gap-4 px-5 py-4">
                      <h3 className="font-serif text-lg font-semibold text-card-foreground">
                        {product.title}
                      </h3>
                      <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

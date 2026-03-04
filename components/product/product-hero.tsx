"use client"

import { useCallback, useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface GalleryImage {
  src: string
  alt: string
  caption: string
}

interface ProductHeroProps {
  title: string
  description: string
  valueProposition: string
  ctaText: string
  galleryImages: GalleryImage[]
}

export function ProductHero({ title, description, valueProposition, ctaText, galleryImages }: ProductHeroProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ])
  const [activeIndex, setActiveIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setActiveIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    return () => { emblaApi.off("select", onSelect) }
  }, [emblaApi, onSelect])

  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text content */}
          <div className="flex flex-col gap-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/60">
              {valueProposition}
            </p>
            <h1 className="text-balance font-serif text-4xl font-bold tracking-tight md:text-5xl">
              {title}
            </h1>
            <p className="text-lg leading-relaxed text-primary-foreground/80">
              {description}
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link href="/contact">
                  {ctaText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>

          {/* Auto-carousel */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg lg:aspect-square">
            <div className="h-full w-full overflow-hidden" ref={emblaRef}>
              <div className="flex h-full">
                {galleryImages.map((img) => (
                  <div key={img.src} className="relative h-full min-w-0 flex-[0_0_100%]">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
              {galleryImages.map((img, i) => (
                <button
                  key={img.src}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === activeIndex
                      ? "w-6 bg-accent"
                      : "w-1.5 bg-primary-foreground/40"
                  }`}
                />
              ))}
            </div>
            <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-primary-foreground/10" />
          </div>
        </div>
      </div>
    </section>
  )
}

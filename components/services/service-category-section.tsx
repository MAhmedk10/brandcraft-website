"use client"

import { useCallback, useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { ArrowLeft, ArrowRight, Check, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { LucideIcon } from "lucide-react"

interface Product {
  name: string
  href: string
  image: string
  imageAlt: string
  description: string
}

interface ServiceCategorySectionProps {
  id: string
  icon: LucideIcon
  title: string
  description: string
  benefits: string[]
  useCases: string[]
  products: Product[]
  galleryImages: { src: string; alt: string }[]
  reversed?: boolean
}

export function ServiceCategorySection({
  id,
  icon: Icon,
  title,
  description,
  benefits,
  useCases,
  products,
  galleryImages,
  reversed = false,
}: ServiceCategorySectionProps) {
  // Gallery carousel with autoplay
  const [galleryRef, galleryApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  )

  // Products carousel
  const [productsRef, productsApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  })
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  const onSelect = useCallback(() => {
    if (!productsApi) return
    setCanPrev(productsApi.canScrollPrev())
    setCanNext(productsApi.canScrollNext())
  }, [productsApi])

  useEffect(() => {
    if (!productsApi) return
    onSelect()
    productsApi.on("select", onSelect)
    productsApi.on("reInit", onSelect)
    return () => {
      productsApi.off("select", onSelect)
      productsApi.off("reInit", onSelect)
    }
  }, [productsApi, onSelect])

  return (
    <section id={id} className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Icon className="h-7 w-7" />
          </div>
          <div>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {title}
            </h2>
            <p className="mt-1 text-muted-foreground">{description}</p>
          </div>
        </div>

        {/* Content grid: Benefits/Use Cases + Gallery */}
        <div className={`mt-12 grid items-start gap-12 lg:grid-cols-2 ${reversed ? "lg:direction-rtl" : ""}`}>
          {/* Left: Benefits and Use Cases */}
          <div className={`flex flex-col gap-8 ${reversed ? "lg:order-2" : ""}`}>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                Key Benefits
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-muted-foreground">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                Use Cases
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {useCases.map((useCase) => (
                  <li key={useCase} className="flex items-start gap-3 text-muted-foreground">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>
            <Button asChild size="lg" className="w-fit bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">
                Get a Quote for {title}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Right: Auto-scrolling Gallery Carousel */}
          <div className={`${reversed ? "lg:order-1" : ""}`}>
            <div className="overflow-hidden rounded-xl" ref={galleryRef}>
              <div className="flex">
                {galleryImages.map((img, idx) => (
                  <div key={idx} className="min-w-0 flex-[0_0_100%]">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted">
                      {img.src ? (
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      ) : (
                        <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted-foreground/40">
                          <ImageIcon className="h-12 w-12" />
                          <span className="text-sm">Image Coming Soon</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Dots indicator */}
            <div className="mt-4 flex justify-center gap-2">
              {galleryImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => galleryApi?.scrollTo(idx)}
                  className="h-2 w-2 rounded-full bg-muted-foreground/30 transition-colors hover:bg-accent data-[active=true]:bg-accent"
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Products Carousel */}
        <div className="mt-16">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-xl font-semibold text-foreground">
              {title} Products
            </h3>
            <div className="flex gap-2">
              <button
                onClick={() => productsApi?.scrollPrev()}
                disabled={!canPrev}
                aria-label="Previous products"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground disabled:opacity-40"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => productsApi?.scrollNext()}
                disabled={!canNext}
                aria-label="Next products"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground disabled:opacity-40"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="mt-6 overflow-hidden" ref={productsRef}>
            <div className="-ml-4 flex">
              {products.map((product) => (
                <div
                  key={product.name}
                  className="min-w-0 flex-[0_0_80%] pl-4 sm:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_20%]"
                >
                  <Link href={product.href} className="group block">
                    <div className="overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-accent hover:shadow-lg">
                      <div className="relative aspect-square overflow-hidden bg-muted">
                        {product.image ? (
                          <Image
                            src={product.image}
                            alt={product.imageAlt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 640px) 80vw, (max-width: 1024px) 45vw, 20vw"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-muted-foreground/40">
                            <ImageIcon className="h-8 w-8" />
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-card-foreground group-hover:text-accent">
                          {product.name}
                        </h4>
                        <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

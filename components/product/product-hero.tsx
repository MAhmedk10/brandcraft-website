"use client"

import Image from "next/image"
import Link from "next/link"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { Button } from "@/components/ui/button"
import { QuoteCtaButton } from "@/components/quote-cta-button"

export interface ProductHeroBackgroundImage {
  src: string
  alt?: string
}

interface ProductHeroProps {
  title: string
  description: string
  valueProposition: string
  ctaText: string
  /** Carousel images. If empty/undefined, falls back to `heroImage`. */
  galleryImages?: ProductHeroBackgroundImage[]
  /** Static fallback image when no gallery is provided. */
  heroImage?: ProductHeroBackgroundImage
}

export function ProductHero({
  title,
  description,
  valueProposition,
  ctaText,
  galleryImages,
  heroImage,
}: ProductHeroProps) {
  const hasGallery = Array.isArray(galleryImages) && galleryImages.length > 0
  const hasHeroImage = !!heroImage?.src

  const [emblaRef] = useEmblaCarousel(
    { loop: true },
    hasGallery
      ? [Autoplay({ delay: 3000, stopOnInteraction: false })]
      : []
  )

  return (
    <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-primary text-primary-foreground lg:min-h-[70vh]">
      {/* Background — gallery carousel, static heroImage, or solid bg fallback */}
      {hasGallery ? (
        <div className="absolute inset-0 z-0" ref={emblaRef}>
          <div className="flex h-full">
            {galleryImages!.map((img, idx) => (
              <div
                key={`${img.src}-${idx}`}
                className="relative h-full min-w-0 flex-[0_0_100%]"
              >
                <Image
                  src={img.src}
                  alt={img.alt ?? ""}
                  fill
                  priority={idx === 0}
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      ) : hasHeroImage ? (
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage!.src}
            alt={heroImage!.alt ?? ""}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ) : null}

      {/* Dark overlay (only meaningful when an image background exists) */}
      {(hasGallery || hasHeroImage) && (
        <div
          aria-hidden="true"
          className="absolute inset-0 z-10 bg-black/60"
        />
      )}

      {/* Hero content */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 py-20 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">
            {valueProposition}
          </p>
          <h1 className="mt-4 text-balance font-serif text-4xl font-bold tracking-tight md:text-5xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/85">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <QuoteCtaButton
              href="#quote"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              {ctaText}
            </QuoteCtaButton>
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
      </div>
    </section>
  )
}

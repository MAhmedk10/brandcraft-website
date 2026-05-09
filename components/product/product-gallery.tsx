"use client"
import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"
import { ImageIcon, ArrowLeft, ArrowRight, ZoomIn } from "lucide-react"
import Lightbox from "yet-another-react-lightbox"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import Counter from "yet-another-react-lightbox/plugins/counter"
import "yet-another-react-lightbox/styles.css"
import "yet-another-react-lightbox/plugins/counter.css"

interface ProductGalleryProps {
  items: { src: string; alt: string; caption: string }[]
}

export function ProductGallery({ items }: ProductGalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    slidesToScroll: 1,
  })
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

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

  // Build lightbox slides only from items that actually have a src.
  const slides = items
    .filter((item) => !!item.src)
    .map((item) => ({
      src: item.src,
      alt: item.alt || item.caption,
    }))

  const openLightbox = (clickedSrc: string) => {
    const idx = slides.findIndex((s) => s.src === clickedSrc)
    setLightboxIndex(idx >= 0 ? idx : 0)
    setLightboxOpen(true)
  }

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Gallery
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
              See examples of our work and the quality we deliver.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canPrev}
              aria-label="Previous gallery images"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground disabled:opacity-40 disabled:hover:bg-card disabled:hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canNext}
              aria-label="Next gallery images"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-primary hover:text-primary-foreground disabled:opacity-40 disabled:hover:bg-card disabled:hover:text-foreground"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
        {/* Carousel */}
        <div className="mt-10 overflow-hidden" ref={emblaRef}>
          <div className="-ml-4 flex">
            {items.map((item, index) => {
              const hasImage = !!item.src
              return (
                <div
                  key={`${item.caption}-${index}`}
                  className="min-w-0 flex-[0_0_100%] pl-4 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <button
                    type="button"
                    onClick={() => hasImage && openLightbox(item.src)}
                    disabled={!hasImage}
                    aria-label={
                      hasImage
                        ? `Open ${item.alt || item.caption} in lightbox`
                        : item.caption
                    }
                    className="group relative flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-lg bg-muted text-muted-foreground/40 transition-transform duration-300 hover:scale-105 disabled:cursor-default disabled:hover:scale-100"
                  >
                    {hasImage ? (
                      <>
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        {/* Hover overlay with zoom icon */}
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 flex items-start justify-end bg-primary/0 p-3 opacity-0 transition-all duration-300 group-hover:bg-primary/30 group-hover:opacity-100"
                        >
                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-foreground shadow-md">
                            <ZoomIn className="h-4 w-4" />
                          </span>
                        </span>
                      </>
                    ) : (
                      <>
                        <ImageIcon className="h-12 w-12" />
                        <span className="text-xs font-medium text-center px-2">
                          {item.caption}
                        </span>
                      </>
                    )}
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {slides.length > 0 && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={slides}
          plugins={[Zoom, Counter]}
        />
      )}
    </section>
  )
}

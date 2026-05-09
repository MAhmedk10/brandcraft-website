"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowLeft, ArrowRight, Camera } from "lucide-react"
import Lightbox from "yet-another-react-lightbox"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import Counter from "yet-another-react-lightbox/plugins/counter"
import "yet-another-react-lightbox/styles.css"
import "yet-another-react-lightbox/plugins/counter.css"

export interface PortfolioItem {
  src: string
  alt: string
  title?: string
  category?: string
}

interface PortfolioSectionProps {
  items?: PortfolioItem[]
}

const ITEMS_PER_SLIDE = 6

const CATEGORY_LABELS: Record<string, string> = {
  patches: "Patches",
  apparel: "Apparel",
  stickers: "Stickers",
  design: "Design Services",
}

/** Split items into pages of 6 (one bento grid per page). */
function chunk<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = []
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size))
  }
  return chunks
}

function PortfolioCard({
  item,
  positionClass,
  onClick,
}: {
  item: PortfolioItem
  positionClass: string
  onClick: () => void
}) {
  const categoryLabel = item.category
    ? CATEGORY_LABELS[item.category] ?? item.category
    : null

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={
        item.title ? `Open ${item.title} in lightbox` : "Open image in lightbox"
      }
      className={`group relative w-full cursor-pointer overflow-hidden rounded-lg bg-muted ${positionClass}`}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 50vw, 33vw"
      />

      {/* Hover dark overlay with title + category */}
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-primary/85 via-primary/30 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {item.title && (
          <p className="text-sm font-semibold text-primary-foreground">
            {item.title}
          </p>
        )}
      </div>

      {/* Category badge — bottom-left */}
      {categoryLabel && (
        <span className="absolute bottom-3 left-3 rounded-full bg-accent px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-accent-foreground shadow">
          {categoryLabel}
        </span>
      )}
    </button>
  )
}

function PlaceholderCard({ positionClass }: { positionClass: string }) {
  return (
    <div
      className={`flex w-full items-center justify-center overflow-hidden rounded-lg bg-muted text-muted-foreground/40 ${positionClass}`}
      aria-hidden="true"
    >
      <Camera className="h-10 w-10" />
    </div>
  )
}

/**
 * Renders one bento grid slide. Always renders 6 cells — fills any
 * shortfall with placeholder cards so layout never breaks.
 */
function PortfolioSlide({
  pageItems,
  baseIndex,
  onItemClick,
}: {
  pageItems: PortfolioItem[]
  baseIndex: number
  onItemClick: (globalIndex: number) => void
}) {
  // Pad to exactly 6 cells.
  const cells = Array.from({ length: ITEMS_PER_SLIDE }, (_, i) => pageItems[i])

  return (
    <div className="grid grid-cols-2 gap-3 md:h-[460px] md:grid-cols-3 md:grid-rows-2">
      {cells.map((item, i) => {
        // Mobile: every cell is a 1×1 square so 6 items form a clean 2×3
        // grid (no empty corner). Desktop: bento — item 0 wide, item 1 tall.
        const posClass =
          i === 0
            ? "col-span-1 row-span-1 md:col-span-2"
            : i === 1
              ? "col-span-1 row-span-1 md:row-span-2"
              : "col-span-1 row-span-1"

        // Square aspect on mobile so each card has explicit height for the
        // <Image fill /> children to render. Desktop gets its size from the
        // fixed grid container height.
        const sizingClass = "aspect-square md:aspect-auto md:h-full"

        if (!item) {
          return (
            <div
              key={`ph-${i}`}
              className={`${posClass} ${sizingClass} rounded-lg bg-muted`}
              aria-hidden="true"
            />
          )
        }
        return (
          <PortfolioCard
            key={`item-${baseIndex + i}`}
            item={item}
            positionClass={`${posClass} ${sizingClass}`}
            onClick={() => onItemClick(baseIndex + i)}
          />
        )
      })}
    </div>
  )
}

export function PortfolioSection({ items }: PortfolioSectionProps) {
  const sourceItems: PortfolioItem[] = items && items.length > 0 ? items : []
  const hasItems = sourceItems.length > 0

  // For the empty state we still show a single bento page of placeholders.
  const pages = hasItems ? chunk(sourceItems, ITEMS_PER_SLIDE) : [[]]

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: pages.length > 1,
  })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
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

  // Lightbox slides — full source list (across pages).
  const slides = sourceItems.map((it) => ({
    src: it.src,
    alt: it.alt || it.title || "Portfolio item",
  }))

  const openLightboxAt = (globalIndex: number) => {
    setLightboxIndex(globalIndex)
    setLightboxOpen(true)
  }

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

        {/* Carousel viewport */}
        <div className="mt-14">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {pages.map((page, pageIdx) => (
                <div
                  key={`slide-${pageIdx}`}
                  className="min-w-0 flex-[0_0_100%]"
                >
                  <PortfolioSlide
                    pageItems={page}
                    baseIndex={pageIdx * ITEMS_PER_SLIDE}
                    onItemClick={openLightboxAt}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Controls row — arrows + dots, hidden when only one slide */}
        {pages.length > 1 && (
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              aria-label="Previous"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2">
              {pages.map((_, i) => (
                <button
                  key={`dot-${i}`}
                  type="button"
                  onClick={() => emblaApi?.scrollTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === selectedIndex
                      ? "w-6 bg-accent"
                      : "w-2 bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              aria-label="Next"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {hasItems && (
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

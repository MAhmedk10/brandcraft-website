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

// 5 cells per slide on desktop: item 0 spans 2 cols (the wide bento card),
// the remaining 4 fill the rest of a 3×2 grid for a total of 6 occupied
// grid cells. Going higher than 5 causes items to overflow into an
// implicit row 3 that gets clipped by the fixed grid height.
const ITEMS_PER_SLIDE = 5

const CATEGORY_LABELS: Record<string, string> = {
  patches: "Patches",
  apparel: "Apparel",
  stickers: "Stickers",
  design: "Design Services",
}

/**
 * Each grid cell carries its source index so the lightbox always opens at
 * the correct original image — even when a cell is a "looped" copy used
 * to pad out a partial last slide.
 */
type PortfolioCell = { item: PortfolioItem; sourceIndex: number }

/**
 * Split items into pages of `size` cells. If the final page would be
 * partial AND we have more than one page total, pad it by looping back
 * to the start of the list so every slide renders the same bento layout
 * (and the user never sees an inconsistent half-empty last slide).
 */
function buildPages(arr: PortfolioItem[], size: number): PortfolioCell[][] {
  if (arr.length === 0) return [[]]
  const pages: PortfolioCell[][] = []
  for (let i = 0; i < arr.length; i += size) {
    const page: PortfolioCell[] = []
    for (let j = 0; j < size; j++) {
      const idx = i + j
      if (idx < arr.length) {
        page.push({ item: arr[idx], sourceIndex: idx })
      } else if (arr.length > size) {
        // Loop padding — only when paginating (avoid duplicating items
        // when the entire collection fits on a single slide).
        const padIdx = (idx - arr.length) % arr.length
        page.push({ item: arr[padIdx], sourceIndex: padIdx })
      }
    }
    pages.push(page)
  }
  return pages
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
        className="object-cover transition-transform duration-300 group-hover:scale-105"
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
 * Renders one bento grid slide. Pages from `buildPages` are pre-padded so
 * every slide either has ITEMS_PER_SLIDE cells (paginated case) or fewer
 * (when the entire collection fits on a single slide).
 */
function PortfolioSlide({
  cells,
  pageIndex,
  onItemClick,
}: {
  cells: PortfolioCell[]
  pageIndex: number
  onItemClick: (sourceIndex: number) => void
}) {
  // Pad to ITEMS_PER_SLIDE so the grid template always allocates space
  // consistently (slot may be undefined when the whole collection fits
  // on a single slide).
  const slots = Array.from(
    { length: ITEMS_PER_SLIDE },
    (_, i) => cells[i]
  )

  // When the entire list fits in a single slide we may have fewer than
  // ITEMS_PER_SLIDE cells — fall back to the simple square layout in
  // that case so we don't render a wide hero on top of nothing.
  const isFullSlide = cells.length === ITEMS_PER_SLIDE

  return (
    <div className="grid grid-cols-2 gap-3 md:h-[460px] md:grid-cols-3 md:grid-rows-2">
      {slots.map((cell, i) => {
        // Mobile: item 0 is wide on full slides, otherwise every cell is
        // a 1×1 square. Desktop: item 0 always spans 2 cols.
        const mobileSpan =
          i === 0 && isFullSlide ? "col-span-2" : "col-span-1"
        const posClass = `${mobileSpan} row-span-1 md:row-span-1 ${
          i === 0 ? "md:col-span-2" : "md:col-span-1"
        }`

        // Square aspect on mobile so each card has explicit height for
        // the <Image fill /> children to render. Item 0 when wide on
        // mobile gets a 2:1 ratio. Desktop gets its size from the fixed
        // grid container height.
        const mobileAspect =
          i === 0 && isFullSlide ? "aspect-[2/1]" : "aspect-square"
        const sizingClass = `${mobileAspect} md:aspect-auto md:h-full`

        if (!cell) {
          // Hide empty placeholders on mobile entirely so partial slides
          // (e.g. when the whole collection fits on a single slide) don't
          // show muted gaps.
          return (
            <div
              key={`ph-${pageIndex}-${i}`}
              className={`hidden ${posClass} ${sizingClass} rounded-lg bg-muted md:block`}
              aria-hidden="true"
            />
          )
        }
        return (
          <PortfolioCard
            key={`item-${pageIndex}-${i}`}
            item={cell.item}
            positionClass={`${posClass} ${sizingClass}`}
            onClick={() => onItemClick(cell.sourceIndex)}
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
  const pages = hasItems
    ? buildPages(sourceItems, ITEMS_PER_SLIDE)
    : [[] as PortfolioCell[]]

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
                    cells={page}
                    pageIndex={pageIdx}
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

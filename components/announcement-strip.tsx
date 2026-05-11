"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"

interface AnnouncementStripProps {
  items?: string[] | null
  enabled?: boolean | null
}

/**
 * Full-width announcement strip rendered above the navbar.
 *
 * - Content (items + enabled) is fetched server-side from Sanity siteSettings
 *   and passed in as props.
 * - Hidden when `enabled === false`, when `items` is empty, or when the user
 *   has previously dismissed the strip in the current session
 *   (sessionStorage key: `strip-dismissed`).
 * - Layout: items are centered horizontally and static (no scrolling). On
 *   narrow viewports, items that don't fit are simply clipped via
 *   `overflow-hidden` — nothing animates.
 */
export function AnnouncementStrip({ items, enabled }: AnnouncementStripProps) {
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    if (sessionStorage.getItem("strip-dismissed") === "true") {
      setDismissed(true)
    }
  }, [])

  if (enabled === false) return null
  if (!items || items.length === 0) return null
  if (dismissed) return null

  const handleDismiss = () => {
    sessionStorage.setItem("strip-dismissed", "true")
    setDismissed(true)
  }

  return (
    <div
      role="region"
      aria-label="Site announcements"
      className="relative flex w-full items-center bg-black text-accent-foreground md:h-10"
    >
      {/* Mobile: continuous marquee so users can see every item as it scrolls
          past. The list is duplicated to create a seamless loop. */}
      <div
        className="group relative flex flex-1 items-center overflow-hidden py-2 md:hidden"
        aria-label="Announcements"
      >
        <div className="flex shrink-0 animate-strip-marquee items-center gap-6 whitespace-nowrap pr-6 group-hover:[animation-play-state:paused]">
          {items.map((item, i) => (
            <span key={`a-${i}`} className="flex items-center gap-6">
              <span className="text-xs font-medium">{item}</span>
              <span aria-hidden="true" className="text-accent-foreground/40">
                {"\u00B7"}
              </span>
            </span>
          ))}
        </div>
        <div
          aria-hidden="true"
          className="flex shrink-0 animate-strip-marquee items-center gap-6 whitespace-nowrap pr-6 group-hover:[animation-play-state:paused]"
        >
          {items.map((item, i) => (
            <span key={`b-${i}`} className="flex items-center gap-6">
              <span className="text-xs font-medium">{item}</span>
              <span className="text-accent-foreground/40">{"\u00B7"}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Desktop: static, evenly-spread items */}
      <div className="hidden flex-1 items-center overflow-hidden md:flex">
        <div className="flex w-full items-center justify-between px-8">
          {items.map((item, i) => (
            <span key={i} className="flex items-center gap-3">
              <span className="whitespace-nowrap text-xs font-medium">
                {item}
              </span>
              {i < items.length - 1 && (
                <span
                  aria-hidden="true"
                  className="text-accent-foreground/40"
                >
                  {"\u00B7"}
                </span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Dismiss button */}
      <button
        type="button"
        onClick={handleDismiss}
        aria-label="Dismiss announcement"
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-accent-foreground/80 transition-colors hover:bg-accent-foreground/10 hover:text-accent-foreground md:mr-2"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}

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
      className="relative flex w-full items-center bg-accent text-accent-foreground md:h-10"
    >
      {/* Static spaced content — only shows the first 2 items on mobile */}
      <div className="flex flex-1 items-center overflow-hidden py-2 md:py-0">
        <div className="flex w-full items-center justify-between px-4 md:px-8">
          {items.map((item, i) => (
            <span
              key={i}
              className={`items-center gap-3 ${i >= 2 ? "hidden md:flex" : "flex"}`}
            >
              <span className="whitespace-nowrap text-xs font-medium">
                {item}
              </span>
              {i < items.length - 1 && (
                <span
                  aria-hidden="true"
                  className="hidden text-accent-foreground/40 md:inline"
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

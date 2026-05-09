"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"

interface AnnouncementStripProps {
  items?: string[] | null
  enabled?: boolean | null
}

/**
 * Full-width marquee strip rendered above the navbar.
 *
 * - Content (items + enabled) is fetched server-side from Sanity siteSettings
 *   and passed in as props.
 * - Hidden when `enabled === false`, when `items` is empty, or when the user
 *   has previously dismissed the strip in the current session
 *   (sessionStorage key: `strip-dismissed`).
 * - Marquee animation: 30s linear infinite, paused on hover.
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

  // Duplicate the array so the marquee loops seamlessly.
  const doubled = [...items, ...items]

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
      {/* Marquee viewport */}
      <div className="group flex-1 overflow-hidden py-2 md:py-0">
        <div
          className="flex w-max animate-[announcement-marquee_30s_linear_infinite] whitespace-nowrap group-hover:[animation-play-state:paused]"
          style={{ willChange: "transform" }}
        >
          {doubled.map((item, idx) => (
            <span
              key={idx}
              className="flex shrink-0 items-center text-xs font-medium"
            >
              <span className="px-4">{item}</span>
              <span aria-hidden="true" className="opacity-60">
                {"·"}
              </span>
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

"use client"

import type { MouseEvent, ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

type ButtonVariant = "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
type ButtonSize = "default" | "sm" | "lg" | "icon"

interface QuoteCtaButtonProps {
  children: ReactNode
  /**
   * Target href. Use "#quote" for same-page anchors (e.g. on a product page that
   * renders the quote form), or "/#quote" for cross-page navigation back to the
   * homepage quote form. If the target element is present on the current page,
   * the click is intercepted to smooth-scroll, which avoids the
   * "URL already has #quote so nothing happens" issue.
   */
  href?: "#quote" | "/#quote"
  className?: string
  variant?: ButtonVariant
  size?: ButtonSize
  showArrow?: boolean
}

export function QuoteCtaButton({
  children,
  href = "#quote",
  className,
  variant = "default",
  size = "lg",
  showArrow = true,
}: QuoteCtaButtonProps) {
  const pathname = usePathname()
  const isHomepage = pathname === "/"
  const targetsCurrentPage = href === "#quote" || (href === "/#quote" && isHomepage)

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!targetsCurrentPage) return
    if (typeof document === "undefined") return

    const target = document.getElementById("quote")
    if (!target) return

    event.preventDefault()
    target.scrollIntoView({ behavior: "smooth", block: "start" })

    // Keep the URL hash in sync without causing an extra scroll jump.
    if (typeof window !== "undefined" && window.location.hash !== "#quote") {
      window.history.replaceState(null, "", "#quote")
    }
  }

  return (
    <Button asChild size={size} variant={variant} className={cn(className)}>
      <Link href={href} onClick={handleClick}>
        {children}
        {showArrow ? <ArrowRight className="ml-2 h-4 w-4" /> : null}
      </Link>
    </Button>
  )
}

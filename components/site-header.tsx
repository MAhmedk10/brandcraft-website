"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useRef, useEffect } from "react"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const productCategories = [
  {
    label: "Patches",
    items: [
      { href: "/products/custom-patches", label: "Custom Patches" },
      { href: "/products/custom-jacket-patches", label: "Custom Jacket Patches" },
      { href: "/products/embroidered-patches", label: "Embroidered Patches" },
      { href: "/products/chenille-patches", label: "Chenille Patches" },
      { href: "/products/leather-patches", label: "Leather Patches" },
      { href: "/products/woven-patches", label: "Woven Patches" },
      { href: "/products/iron-on-patches", label: "Iron On Patches" },
      { href: "/products/velcro-patches", label: "Velcro Patches" },
      { href: "/products/pvc-patches", label: "PVC Patches" },
      { href: "/products/sublimation-patches", label: "Sublimation Patches" },
    ],
  },
  {
    label: "Stickers & Labels",
    items: [
      { href: "/products/die-cut-stickers", label: "Die Cut Stickers" },
      { href: "/products/holographic-stickers", label: "Holographic Stickers" },
      { href: "/products/hangtags-labels", label: "Hangtags & Labels" },
    ],
  },
  {
    label: "Apparel",
    items: [
      { href: "/products/custom-apparel", label: "Custom Apparel" },
      { href: "/products/hoodies-tracksuits", label: "Hoodies & Tracksuits" },
      { href: "/products/letterman-jackets", label: "Letterman Jackets" },
      { href: "/products/biker-jackets", label: "Biker Jackets" },
    ],
  },
  {
    label: "Design Services",
    items: [
      { href: "/products/vector-art", label: "Vector Art" },
      { href: "/products/embroidery-digitizing", label: "Embroidery Digitizing" },
      { href: "/products/heat-transfer-dtf-print", label: "Heat Transfer DTF Print" },
    ],
  },
]

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Close desktop dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  // Close dropdown on route change
  useEffect(() => {
    setProductsOpen(false)
    setMobileOpen(false)
    setMobileProductsOpen(false)
  }, [pathname])

  function handleMouseEnter() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setProductsOpen(true)
  }

  function handleMouseLeave() {
    timeoutRef.current = setTimeout(() => setProductsOpen(false), 200)
  }

  const isProductPage = pathname.startsWith("/products")

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" aria-label="BrandCraft Co. home">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary">
            <span className="text-sm font-bold tracking-tight text-primary-foreground">BC</span>
          </div>
          <span className="font-serif text-lg font-bold tracking-tight text-foreground">
            BrandCraft Co.
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {/* Home */}
          <Link
            href="/"
            className={cn(
              "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-foreground",
              pathname === "/" ? "text-foreground" : "text-muted-foreground"
            )}
          >
            Home
          </Link>

          {/* Products mega-dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className={cn(
                "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-foreground",
                isProductPage ? "text-foreground" : "text-muted-foreground"
              )}
              aria-expanded={productsOpen}
              aria-haspopup="true"
            >
              Products
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform",
                  productsOpen && "rotate-180"
                )}
              />
            </button>

            {productsOpen && (
              <div className="absolute left-1/2 top-full z-50 mt-1 w-[680px] -translate-x-1/2 rounded-lg border border-border bg-card p-5 shadow-xl">
                <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
                  {productCategories.map((category) => (
                    <div key={category.label}>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {category.label}
                      </p>
                      <ul className="flex flex-col gap-0.5">
                        {category.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              className={cn(
                                "block rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-secondary hover:text-foreground",
                                pathname === item.href
                                  ? "bg-secondary font-medium text-foreground"
                                  : "text-muted-foreground"
                              )}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Services, About, Contact */}
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-foreground",
                pathname === link.href ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button asChild size="sm">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="max-h-[80vh] overflow-y-auto border-t border-border md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4" aria-label="Mobile navigation">
            {/* Home */}
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary",
                pathname === "/" ? "bg-secondary text-foreground" : "text-muted-foreground"
              )}
            >
              Home
            </Link>

            {/* Products accordion */}
            <button
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              className={cn(
                "flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary",
                isProductPage ? "bg-secondary text-foreground" : "text-muted-foreground"
              )}
            >
              Products
              <ChevronRight
                className={cn(
                  "h-4 w-4 transition-transform",
                  mobileProductsOpen && "rotate-90"
                )}
              />
            </button>
            {mobileProductsOpen && (
              <div className="ml-3 flex flex-col gap-3 border-l border-border pl-3">
                {productCategories.map((category) => (
                  <div key={category.label}>
                    <p className="mb-1.5 px-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                      {category.label}
                    </p>
                    {category.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "block rounded-md px-3 py-1.5 text-sm transition-colors hover:bg-secondary",
                          pathname === item.href
                            ? "font-medium text-foreground"
                            : "text-muted-foreground"
                        )}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {/* Other links */}
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary",
                  pathname === link.href
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-2 px-3">
              <Button asChild className="w-full" size="sm">
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

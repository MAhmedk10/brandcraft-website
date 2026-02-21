import Link from "next/link"
import { Mail, Phone } from "lucide-react"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
]

const productCategories = [
  {
    label: "Patches",
    items: [
      { href: "/products/custom-patches", label: "Custom Patches" },
      { href: "/products/custom-jacket-patches", label: "Jacket Patches" },
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
      { href: "/products/heat-transfer-dtf-print", label: "Heat Transfer DTF" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        {/* Top section: Brand + Nav + Contact */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2" aria-label="BrandCraft Co. home">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary-foreground">
                <span className="text-sm font-bold tracking-tight text-primary">BC</span>
              </div>
              <span className="font-serif text-lg font-bold tracking-tight text-primary-foreground">
                BrandCraft Co.
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
              Premium custom branding solutions for ambitious businesses. Patches, logos, printing, and embroidery crafted with precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
              Navigation
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick product links (top 6) */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
              Popular Products
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {[
                { href: "/products/custom-patches", label: "Custom Patches" },
                { href: "/products/embroidered-patches", label: "Embroidered Patches" },
                { href: "/products/pvc-patches", label: "PVC Patches" },
                { href: "/products/die-cut-stickers", label: "Die Cut Stickers" },
                { href: "/products/custom-apparel", label: "Custom Apparel" },
                { href: "/products/embroidery-digitizing", label: "Embroidery Digitizing" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
              Contact
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Mail className="h-4 w-4 shrink-0" />
                <span>contact@brandcraft.com</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Phone className="h-4 w-4 shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="text-sm text-primary-foreground/70">
                Mon - Fri, 9 AM - 5 PM EST
              </li>
            </ul>
          </div>
        </div>

        {/* Products grid: all categories */}
        <div className="mt-12 border-t border-primary-foreground/10 pt-10">
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
            All Products
          </h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {productCategories.map((category) => (
              <div key={category.label}>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary-foreground/50">
                  {category.label}
                </p>
                <ul className="flex flex-col gap-2">
                  {category.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
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

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 md:flex-row">
          <p className="text-xs text-primary-foreground/50">
            &copy; {new Date().getFullYear()} BrandCraft Co. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-primary-foreground/50 hover:text-primary-foreground/70">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-primary-foreground/50 hover:text-primary-foreground/70">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

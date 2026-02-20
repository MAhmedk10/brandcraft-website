import Link from "next/link"
import { Mail, Phone } from "lucide-react"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
]

const serviceLinks = [
  { href: "/services#patches", label: "Custom Patches" },
  { href: "/services#logos", label: "Logo Design" },
  { href: "/services#printing", label: "Printing Services" },
  { href: "/services#embroidery", label: "Embroidery Services" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2" aria-label="BrandCraft Co. home">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary-foreground">
                <span className="text-sm font-bold tracking-tight text-primary">BC</span>
              </div>
              <span className="text-lg font-bold tracking-tight font-serif text-primary-foreground">
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

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/90">
              Services
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {serviceLinks.map((link) => (
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

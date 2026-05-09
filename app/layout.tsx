import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ChatWidgetWrapper } from '@/components/ai-chat/chat-widget-wrapper'
import { client } from '@/sanity/lib/client'
import { allProductsQuery } from '@/sanity/lib/queries'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: {
    default: 'BrandCraft Co. | Premium Custom Branding Solutions',
    template: '%s | BrandCraft Co.',
  },
  description:
    'High-quality custom patches, logos, printing, and embroidery designed to elevate your brand identity. Trusted by leading businesses and organizations.',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#2a2520',
  width: 'device-width',
  initialScale: 1,
}

/**
 * Sanity product shape used by the navbar dropdown and footer columns.
 * Kept loose because Sanity may return partial documents during migration.
 */
export type NavProduct = {
  _id?: string
  title?: string | null
  slug?: string | null
  category?: string | null
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Fetch live product list for navbar + footer with 1-hour ISR cache.
  // Falls back to an empty list on any failure so the layout never crashes.
  let products: NavProduct[] = []
  try {
    products = await client.fetch<NavProduct[]>(
      allProductsQuery,
      {},
      { next: { revalidate: 3600 } }
    )
  } catch {
    products = []
  }

  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${playfairDisplay.variable} font-sans antialiased`}
      >
        <SiteHeader products={products ?? []} />
        <main >{children}</main>
        <SiteFooter products={products ?? []} />
        <ChatWidgetWrapper />
      </body>
    </html>
  )
}

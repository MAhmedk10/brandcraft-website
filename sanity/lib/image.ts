import imageUrlBuilder from "@sanity/image-url"
import type { SanityImageSource } from "@sanity/image-url/lib/types/types"
import { client, isSanityConfigured } from "./client"

/**
 * Lazily-initialised image URL builder. Only created when Sanity is
 * configured — otherwise `urlFor` returns a no-op builder that yields
 * empty strings, so callers can still chain `.url()` without crashing.
 */
const builder = isSanityConfigured ? imageUrlBuilder(client) : null

const noopBuilder = {
  width: () => noopBuilder,
  height: () => noopBuilder,
  format: () => noopBuilder,
  quality: () => noopBuilder,
  fit: () => noopBuilder,
  auto: () => noopBuilder,
  url: () => "",
  toString: () => "",
}

/**
 * Build an optimised CDN URL for any Sanity image source.
 * Chain `.width()`, `.height()`, `.format("webp")`, `.quality(n)`, etc.
 *
 * Example:
 *   urlFor(product.gallery[0]).width(800).format("webp").quality(85).url()
 *
 * When Sanity is not configured, returns a chainable no-op whose `.url()`
 * is the empty string — so callers don't need a configuration check.
 */
export function urlFor(source: SanityImageSource) {
  if (!builder) return noopBuilder as unknown as ReturnType<typeof imageUrlBuilder>["image"] extends (s: SanityImageSource) => infer R ? R : never
  return builder.image(source)
}

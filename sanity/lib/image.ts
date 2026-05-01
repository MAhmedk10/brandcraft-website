import imageUrlBuilder from "@sanity/image-url"
import type { SanityImageSource } from "@sanity/image-url/lib/types/types"
import { client } from "./client"

const builder = imageUrlBuilder(client)

/**
 * Build an optimised CDN URL for any Sanity image source.
 * Chain `.width()`, `.height()`, `.format("webp")`, `.quality(n)`, etc.
 *
 * Example:
 *   urlFor(product.gallery[0]).width(800).format("webp").quality(85).url()
 */
export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

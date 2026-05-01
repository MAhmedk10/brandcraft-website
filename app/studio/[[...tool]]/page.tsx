/**
 * Sanity Studio mounted at /studio
 *
 * This route serves the embedded Sanity Studio. Editors use this to author
 * content (products, site settings) which is then fetched by the rest of
 * the website via GROQ queries.
 *
 * The catch-all `[[...tool]]` segment lets Studio handle its own client-side
 * routing (desk tool, vision tool, etc.) under /studio/*.
 */
import { NextStudio } from "next-sanity/studio"
import config from "@/sanity.config"

export const dynamic = "force-static"
export { metadata, viewport } from "next-sanity/studio"

export default function StudioPage() {
  return <NextStudio config={config} />
}

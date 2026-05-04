import { createClient, type SanityClient } from "next-sanity"

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production"
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01"

/**
 * Whether Sanity environment variables are present. Pages should check this
 * before attempting a fetch so the site stays functional in environments
 * where Sanity has not been configured yet.
 */
export const isSanityConfigured = Boolean(projectId)

/**
 * Stub client used when Sanity is NOT configured. It mimics the shape that
 * `imageUrlBuilder` and our call sites read from, but every operation that
 * would hit the network rejects with a clear error — letting the existing
 * try/catch + local-fallback logic take over cleanly.
 */
function createStubClient(): SanityClient {
  const notConfigured = () =>
    Promise.reject(new Error("Sanity is not configured"))
  const stub = {
    config: () => ({ projectId: "", dataset, apiVersion, useCdn: false }),
    fetch: notConfigured,
    create: notConfigured,
    createOrReplace: notConfigured,
    patch: () => ({ commit: notConfigured }),
    delete: notConfigured,
    withConfig: () => stub,
  }
  return stub as unknown as SanityClient
}

/**
 * Public read-only client.
 * Safe to import from client components — uses CDN for fast cached reads.
 */
export const client: SanityClient = isSanityConfigured
  ? createClient({
      projectId: projectId!,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : createStubClient()

/**
 * Server-only authenticated client.
 * Uses SANITY_API_TOKEN — must NEVER be imported from a client component
 * (any file with "use client" at the top).
 *
 * Use for: drafts, mutations, preview, or any operation that requires auth.
 */
export const serverClient: SanityClient = isSanityConfigured
  ? createClient({
      projectId: projectId!,
      dataset,
      apiVersion,
      useCdn: false,
      token: process.env.SANITY_API_TOKEN,
      perspective: "published",
    })
  : createStubClient()

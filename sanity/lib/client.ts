import { createClient } from "next-sanity"

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production"
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01"

/**
 * Public read-only client.
 * Safe to import from client components — uses CDN for fast cached reads.
 */
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})

/**
 * Server-only authenticated client.
 * Uses SANITY_API_TOKEN — must NEVER be imported from a client component
 * (any file with "use client" at the top).
 *
 * Use for: drafts, mutations, preview, or any operation that requires auth.
 */
export const serverClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  perspective: "published",
})

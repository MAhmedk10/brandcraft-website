/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  // Prevent Next.js from bundling Sanity Studio into the server runtime —
  // Studio relies on browser-only React internals (createContext, etc.) that
  // break under server rendering / Turbopack server bundling.
  serverExternalPackages: ["sanity"],
}

export default nextConfig

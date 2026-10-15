import type { NextConfig } from "next"

const frameSrc = [
  "'self'",
  "https://luma.com",
  "https://*.luma.com",
  "https://lu.ma",
  "https://*.lu.ma",
  "https://www.google.com",
  "https://maps.google.com",
  "https://vercel.live",
].join(" ")

const cspHeaders = [
  {
    key: "Content-Security-Policy",
    value: `frame-src ${frameSrc}`,
  },
]

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90],
    // Cap at the hero master (2560). 3840 would upscale the photo and look pixelated.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 2560],
  },
  async headers() {
    return [
      {
        source: "/",
        headers: cspHeaders,
      },
      {
        source: "/:path*",
        headers: cspHeaders,
      },
      {
        source: "/jurados",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        source: "/jurados/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ]
  },
}

export default nextConfig

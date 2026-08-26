import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90],
    // Cap at the hero master (2560). 3840 would upscale the photo and look pixelated.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 2560],
  },
}

export default nextConfig

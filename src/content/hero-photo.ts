/** Single lightweight civic still. Replaces the ~18 MB SVG reel. */
export const HERO_PHOTO = {
  width: 1600,
  height: 1600,
  fallback: "/hero/kiosco-noche.jpg",
  sizes: "100vw",
  sources: {
    avif: "/hero/kiosco-noche-800.avif 800w, /hero/kiosco-noche-1600.avif 1600w",
    webp: "/hero/kiosco-noche-800.webp 800w, /hero/kiosco-noche-1600.webp 1600w",
  },
} as const

import { HERO_PHOTO } from "@/content/hero-photo"

export function HeroPhoto() {
  return (
    <div className="hero-media" aria-hidden="true">
      {/* LCP: matching <link rel=preload> + static JPEG. next/image wraps and delayed the paint. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={HERO_PHOTO.src}
        alt=""
        width={HERO_PHOTO.width}
        height={HERO_PHOTO.height}
        fetchPriority="high"
        decoding="async"
        className="hero-photo"
      />
    </div>
  )
}

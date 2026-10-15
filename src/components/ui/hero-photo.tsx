import ReactDOM from "react-dom"
import { HERO_PHOTO } from "@/content/hero-photo"

export function HeroPhoto() {
  ReactDOM.preload("/hero/kiosco-noche-800.avif", {
    as: "image",
    type: "image/avif",
    fetchPriority: "high",
    media: "(max-width: 799px)",
  })
  ReactDOM.preload("/hero/kiosco-noche-1600.avif", {
    as: "image",
    type: "image/avif",
    fetchPriority: "high",
    media: "(min-width: 800px)",
  })

  return (
    <div className="hero-media" aria-hidden="true">
      <picture>
        <source
          type="image/avif"
          srcSet={HERO_PHOTO.sources.avif}
          sizes={HERO_PHOTO.sizes}
        />
        <source
          type="image/webp"
          srcSet={HERO_PHOTO.sources.webp}
          sizes={HERO_PHOTO.sizes}
        />
        <img
          src={HERO_PHOTO.fallback}
          alt=""
          width={HERO_PHOTO.width}
          height={HERO_PHOTO.height}
          fetchPriority="high"
          decoding="async"
          className="hero-photo"
        />
      </picture>
    </div>
  )
}

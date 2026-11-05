"use client"

import { useState } from "react"
import { youtubeEmbedSrc, youtubeThumbnailSrc } from "@/lib/youtube"

type Props = {
  videoId: string
  title: string
}

export function YoutubeFacade({ videoId, title }: Props) {
  const [playing, setPlaying] = useState(false)
  const label = `Reproducir grabación: ${title}`

  return (
    <div className="youtube-facade">
      {playing ? (
        <iframe
          src={youtubeEmbedSrc(videoId)}
          title={`Grabación: ${title}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <button
          type="button"
          className="youtube-facade-button"
          onClick={() => setPlaying(true)}
          aria-label={label}
        >
          {/* YouTube CDN thumbnail: skip the optimizer to keep the facade lightweight. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={youtubeThumbnailSrc(videoId)}
            alt=""
            width={480}
            height={360}
            loading="lazy"
            decoding="async"
          />
          <span className="youtube-facade-play" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false">
              <path fill="currentColor" d="M8 5.14v13.72L19 12 8 5.14z" />
            </svg>
          </span>
        </button>
      )}
    </div>
  )
}

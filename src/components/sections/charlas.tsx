import { FormatBadge } from "@/components/ui/format-badge"
import { Wall } from "@/components/ui/wall"
import { community } from "@/content/community"
import {
  LUMA_WEEKLY_TALKS_CALENDAR_URL,
  LUMA_WEEKLY_TALKS_EMBED_URL,
} from "@/lib/luma"
import "./charlas.css"

export function CharlasSection() {
  return (
    <Wall
      id="charlas"
      titleId="charlas-title"
      tone="ink"
      className="charlas"
      eyebrow={community.charlas.eyebrow}
      heading={community.charlas.heading}
    >
      <p className="format-row">
        <FormatBadge format={community.charlas.format} />
        <span>Serie semanal en línea. No es un evento presencial.</span>
      </p>
      <p className="lede">{community.charlas.lede}</p>
      <div className="charlas-frame">
        <iframe
          src={LUMA_WEEKLY_TALKS_EMBED_URL}
          title="Calendario de charlas en línea — Café con Builders with AI"
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          tabIndex={0}
        />
      </div>
      <p className="charlas-fallback">
        <a
          href={LUMA_WEEKLY_TALKS_CALENDAR_URL}
          target="_blank"
          rel="noreferrer"
        >
          {community.charlas.fallbackLabel}
        </a>
      </p>
    </Wall>
  )
}

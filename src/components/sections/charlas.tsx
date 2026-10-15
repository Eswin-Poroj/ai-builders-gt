import { community } from "@/content/community"
import {
  LUMA_WEEKLY_TALKS_CALENDAR_URL,
  LUMA_WEEKLY_TALKS_EMBED_URL,
} from "@/lib/luma"
import "./charlas.css"

export function CharlasSection() {
  return (
    <section
      className="wall wall-ink charlas"
      id="charlas"
      aria-labelledby="charlas-title"
    >
      <h2 id="charlas-title" className="wall-title shout">
        {community.charlas.heading}
      </h2>
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
    </section>
  )
}

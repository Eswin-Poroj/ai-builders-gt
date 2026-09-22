import ReactDOM from "react-dom"
import Link from "next/link"
import { CommunityCta } from "@/components/community-cta"
import {
  CalendarMark,
  PersonMark,
  PinMark,
} from "@/components/hero-marks"
import { CIVIC_REEL } from "@/content/civic-reel"
import { community } from "@/content/community"
import {
  editionIndex,
  editionPath,
  editionStatusLabel,
} from "@/content/edition-index"
import "@/components/sections/hero.css"

export function CommunityHero() {
  ReactDOM.preload("/hero/kiosco-svg-noche.svg", { as: "image", type: "image/svg+xml" })
  const latest = editionIndex[0]

  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero-stage">
        <div className="hero-reel" aria-hidden="true">
          {CIVIC_REEL.map((slide, index) => (
            <img
              key={slide.src}
              src={slide.src}
              alt=""
              className={`hero-slide ${slide.className}`}
              fetchPriority={index === 0 ? "high" : undefined}
              decoding="async"
            />
          ))}
        </div>
        <div className="hero-veil" />
        <div className="hero-invite">
          <div className="hero-title-block">
            <h1 id="hero-title">
              <span>{community.hero.lines[0]}</span>
              <span>{community.hero.lines[1]}</span>
              <span className="hero-xela">{community.hero.lines[2]}</span>
            </h1>
            <p className="hero-subhead">{community.hero.subhead}</p>
          </div>

          <div className="hero-meta-row">
            <div className="hero-info">
              {latest ? (
                <>
                  <p className="hero-date">
                    <CalendarMark className="hero-mark hero-mark-brand" />
                    {latest.dateDisplay}
                  </p>
                  <p className="hero-venue">
                    <PinMark className="hero-mark hero-mark-action" />
                    {latest.city}
                  </p>
                </>
              ) : null}
            </div>
            <div className="hero-actions">
              <p className="hero-badge hero-badge--community">
                <PersonMark className="hero-mark hero-mark-action" />
                {community.hero.badge}
              </p>
              <CommunityCta
                placement="hero"
                className="band band-hero"
                leading={<PersonMark />}
              />
              {latest ? (
                <Link className="chip" href={editionPath(latest.slug)}>
                  {editionStatusLabel(latest.status)} · {latest.tabLabel}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

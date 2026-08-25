import Image from "next/image"
import { event } from "@/content/event"
import { RegisterCta } from "@/components/register-cta"

export function HeroSection() {
  return (
    <section className="hero" id="registro" aria-labelledby="hero-title">
      <div className="hero-photo relative" style={{ position: "relative" }}>
        <Image
          src="/hero/templo-minerva.png"
          alt="Kiosco del Parque Centroamérica, Quetzaltenango"
          fill
          priority
          sizes="(min-width: 800px) 58vw, 100vw"
          className="hero-photo-img"
        />
      </div>
      <div className="hero-invite">
        <Image
          className="hero-logo"
          src="/brand/logo-mark-knockout.png"
          alt="AI Builders GT"
          width={80}
          height={93}
          priority
        />
        <h1 id="hero-title">
          AI Builders
          <span> Xela 2026</span>
        </h1>
        <p className="hero-sub">{event.hero.subhead}</p>
        <p className="hero-date">{event.dates.shout}</p>
        <p className="hero-meta">
          {event.venue.name} · {event.venue.city}
        </p>
        <p className="hero-badge">{event.badge}</p>
        <RegisterCta placement="hero" />
      </div>
    </section>
  )
}

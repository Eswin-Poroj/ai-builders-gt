import Image from "next/image"
import { event, tierLabels } from "@/content/event"
import { AllyRail } from "@/components/ally-rail"
import type { Sponsor, SponsorTier } from "@/content/types"

const order: SponsorTier[] = [
  "naming",
  "sponsor",
  "tool",
  "community",
  "ally",
  "venue",
  "media",
]

export function AlliesSection() {
  const items = order.flatMap((tier) =>
    event.allies.items.filter((item) => item.tier === tier),
  )

  return (
    <section className="wall wall-deep" id="aliados" aria-labelledby="aliados-title">
      <h2 id="aliados-title" className="wall-title shout">
        {event.allies.heading}
      </h2>
      <AllyRail>
        {items.map((sponsor) => (
          <SponsorPlaque key={sponsor.id} sponsor={sponsor} />
        ))}
      </AllyRail>
    </section>
  )
}

const paperLogos = new Set(["voz-xela"])

function SponsorPlaque({ sponsor }: { sponsor: Sponsor }) {
  const inner = (
    <>
      {sponsor.logoSrc ? (
        <span
          className="ally-logo"
          style={
            sponsor.id === "codekids"
              ? { minHeight: "6rem" }
              : paperLogos.has(sponsor.id)
                ? {
                    alignSelf: "flex-start",
                    padding: "0.45rem",
                    background: "var(--paper)",
                    borderRadius: 4,
                  }
                : undefined
          }
        >
          <Image
            src={sponsor.logoSrc}
            alt=""
            width={sponsor.logoWidth ?? 160}
            height={sponsor.logoHeight ?? 48}
            sizes="(max-width: 420px) 78vw, 16rem"
            loading="eager"
            unoptimized={sponsor.logoSrc.endsWith(".svg")}
            style={
              sponsor.id === "codekids"
                ? { maxHeight: "6rem" }
                : undefined
            }
          />
        </span>
      ) : null}
      <span className="ally-tier">{tierLabels[sponsor.tier]}</span>
      <span className="ally-name shout">{sponsor.name}</span>
    </>
  )

  if (!sponsor.href) {
    return (
      <div role="listitem">
        <div className="ally-plaque">{inner}</div>
      </div>
    )
  }

  return (
    <div role="listitem">
      <a
        className="ally-plaque"
        href={sponsor.href}
        rel="noreferrer"
        target="_blank"
      >
        {inner}
      </a>
    </div>
  )
}

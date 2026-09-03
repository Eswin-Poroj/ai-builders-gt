'use client'

import Image from "next/image"
import { useState } from "react"
import { event } from "@/content/event"
import type { Speaker } from "@/content/types"

export function SpeakersSection() {
  return (
    <section className="wall wall-ink" id="speakers" aria-labelledby="speakers-title">
      <h2 id="speakers-title" className="wall-title shout">
        {event.speakers.heading}
      </h2>
      <div className="cast">
        {event.speakers.items.map((speaker) => (
          <SpeakerBay key={speaker.id} speaker={speaker} />
        ))}
      </div>
    </section>
  )
}

function getInitials(speaker: Speaker): string {
  if (!speaker.confirmed) return "?"
  return speaker.name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase()
}

function getSocialLinks(speaker: Speaker): Array<{ platform: string; url: string }> {
  const links: Array<{ platform: string; url: string }> = []

  if (speaker.socials) {
    const { linkedin, instagram, github, twitter, website } = speaker.socials
    if (linkedin) links.push({ platform: "linkedin", url: linkedin })
    if (instagram) links.push({ platform: "instagram", url: instagram })
    if (github) links.push({ platform: "github", url: github })
    if (twitter) links.push({ platform: "twitter", url: twitter })
    if (website) links.push({ platform: "website", url: website })
  }

  if (links.length === 0 && speaker.href) {
    links.push({ platform: detectPlatform(speaker.href), url: speaker.href })
  }

  return links
}

function detectPlatform(url: string): string {
  if (url.includes("linkedin.com")) return "linkedin"
  if (url.includes("instagram.com")) return "instagram"
  if (url.includes("github.com")) return "github"
  if (url.includes("twitter.com") || url.includes("x.com")) return "twitter"
  return "website"
}

function platformLabel(platform: string): string {
  const labels: Record<string, string> = {
    linkedin: "LinkedIn",
    instagram: "Instagram",
    github: "GitHub",
    twitter: "Twitter / X",
    website: "Web",
  }
  return labels[platform] ?? platform
}

function SpeakerBay({ speaker }: { speaker: Speaker }) {
  const [flipped, setFlipped] = useState(false)
  const socialLinks = getSocialLinks(speaker)

  if (!speaker.confirmed) {
    return (
      <article className="speaker-card">
        <div className="speaker-card-inner">
          <div className="speaker-front">
            <div className="speaker-mark" aria-hidden="true">
              <span className="speaker-initials">?</span>
            </div>
            <div className="speaker-info">
              <p className="tba">Por confirmar</p>
            </div>
          </div>
        </div>
      </article>
    )
  }

  return (
    <div className={`speaker-card${flipped ? " is-flipped" : ""}`}>
      <div className="speaker-card-inner">
        {/* FRONT */}
        <button
          className="speaker-front"
          onClick={() => setFlipped(true)}
          tabIndex={flipped ? -1 : 0}
          aria-label={`Ver perfil de ${speaker.name}`}
        >
          <div className="speaker-mark" aria-hidden="true">
            {speaker.photoSrc ? (
              <Image
                src={speaker.photoSrc}
                alt=""
                width={128}
                height={160}
                sizes="(min-width: 800px) 7rem, 4.5rem"
              />
            ) : (
              <span className="speaker-initials">{getInitials(speaker)}</span>
            )}
          </div>
          <div className="speaker-info">
            <h3 className="speaker-name shout">{speaker.name}</h3>
            {speaker.role ? <p className="speaker-role">{speaker.role}</p> : null}
            {speaker.topic ? <p className="speaker-topic">{speaker.topic}</p> : null}
            <span className="speaker-flip-hint" aria-hidden="true">Ver bio →</span>
          </div>
        </button>

        {/* BACK */}
        <div className="speaker-back" aria-hidden={!flipped}>
          <div className="speaker-back-header">
            <span className="speaker-back-name">{speaker.name}</span>
            <button
              className="speaker-back-close"
              onClick={() => setFlipped(false)}
              tabIndex={flipped ? 0 : -1}
              aria-label="Cerrar perfil"
            >
              ×
            </button>
          </div>

          {speaker.bio ? (
            <p className="speaker-bio">{speaker.bio}</p>
          ) : null}

          {speaker.topic ? (
            <p className="speaker-back-topic">{speaker.topic}</p>
          ) : null}

          {socialLinks.length > 0 ? (
            <div className="speaker-socials">
              {socialLinks.map(({ platform, url }) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="speaker-social-link"
                  tabIndex={flipped ? 0 : -1}
                  aria-label={`${platformLabel(platform)} de ${speaker.name}`}
                >
                  <SocialIcon platform={platform} />
                  <span>{platformLabel(platform)}</span>
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

function SocialIcon({ platform }: { platform: string }) {
  switch (platform) {
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
        </svg>
      )
    case "github":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      )
    case "twitter":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.906-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      )
  }
}

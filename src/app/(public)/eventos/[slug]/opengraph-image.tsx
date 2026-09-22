import { ImageResponse } from "next/og"
import { getEdition } from "@/content/editions"

export const alt = "AI Builders Xela 2026"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const edition = getEdition(slug)
  const title = edition?.editionName ?? "AI Builders GT"
  const meta = edition
    ? `${edition.dates.display} · ${edition.venue.city}`
    : "Comunidad de IA en Guatemala"
  const cta = edition?.seo.ogCta ?? "Entrá al grupo"

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0F0A1E",
          color: "#EDEBEE",
          padding: 72,
          fontFamily: "Poppins, ui-sans-serif, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 600,
            color: "#0F766E",
            marginBottom: 18,
          }}
        >
          AI Builders GT
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 72,
            lineHeight: 1.05,
            fontWeight: 700,
            letterSpacing: -2,
          }}
        >
          <span>AI Builders</span>
          <span style={{ color: "#0F766E" }}>
            {edition?.tabLabel ?? title}
          </span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            marginTop: 22,
            color: "#EDEBEE",
          }}
        >
          {meta}
        </div>
        <div
          style={{
            marginTop: 36,
            background: "#0F766E",
            color: "#EDEBEE",
            padding: "16px 28px",
            fontSize: 26,
            fontWeight: 700,
            width: 320,
            display: "flex",
            justifyContent: "center",
          }}
        >
          {cta}
        </div>
      </div>
    ),
    { ...size },
  )
}

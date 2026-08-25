import { ImageResponse } from "next/og"
import { event } from "@/content/event"

export const alt = event.seo.title
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
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
          fontFamily: "Arial Narrow, sans-serif",
        }}
      >
        <div
          style={{
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
          <span style={{ color: "#0F766E" }}>Xela 2026</span>
        </div>
        <div style={{ fontSize: 28, marginTop: 22, color: "#EDEBEE" }}>
          {event.dates.display} · {event.venue.city}
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
          Regístrate gratis
        </div>
      </div>
    ),
    { ...size },
  )
}

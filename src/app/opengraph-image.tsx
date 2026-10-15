import { ImageResponse } from "next/og"
import { COMMUNITY_CTA_LABEL, community } from "@/content/community"

export const alt = community.seo.title
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
          color: "#FFFFFF",
          padding: 72,
          fontFamily: "Poppins, ui-sans-serif, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 600,
            color: "#E5D4F5",
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
          <span>GT</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            marginTop: 22,
            color: "#E5D4F5",
          }}
        >
          Pasar de usar la IA a construir con ella
        </div>
        <div
          style={{
            marginTop: 36,
            background: "#F59E0B",
            color: "#0F0A1E",
            padding: "16px 28px",
            fontSize: 26,
            fontWeight: 700,
            width: 420,
            display: "flex",
            justifyContent: "center",
          }}
        >
          {COMMUNITY_CTA_LABEL}
        </div>
      </div>
    ),
    { ...size },
  )
}

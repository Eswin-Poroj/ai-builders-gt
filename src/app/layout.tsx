import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { JsonLd } from "@/components/json-ld"
import { event } from "@/content/event"
import { SITE_URL } from "@/lib/site"
import "./globals.css"

const sans = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: event.seo.title,
  description: event.seo.description,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: event.seo.title,
    description: event.seo.description,
    url: SITE_URL,
    siteName: event.communityName,
    locale: "es_GT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: event.seo.title,
    description: event.seo.description,
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={sans.variable}>
      <body className={sans.className}>
        <div
          hidden
          dangerouslySetInnerHTML={{
            __html: `<!--
THESIS: El home es el umbral del arco de Xela: la foto del templo mira al cielo vacío; la invitación se lee abajo, nunca dentro del anillo. Rehúsa el afiche gritón recortado y el hero SaaS con orbes.
OWN-WORLD: Foto real del kiosco; campo #0F0A1E; blanco; morado #5B21B6; teal #0F766E como única puerta. Sans geométrica Poppins.
STORY: Quien llega de Instagram ve el lugar, la fecha y que es gratis, y se registra en Luma.
FIRST VIEWPORT: Foto mirando arriba, anillo sin tipo. Panel: logo, AI Builders Xela 2026, 19–20 sept 2026, Mesoamericana · Quetzaltenango, 100% Gratis, CTA Regístrate gratis.
FORM: Arco cívico de Xela (Parque Centroamérica / Templo a Minerva); seed 4c2d6d65; composición A revisada (tipo fuera del anillo).
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
-->`,
          }}
        />
        <a className="skip" href="#sobre">
          Saltar al contenido
        </a>
        <JsonLd />
        {children}
      </body>
    </html>
  )
}

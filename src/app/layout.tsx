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
THESIS: El kiosco de noche es el umbral: la invitación se lee en la sombra de las columnas, sobre la plaza real de Xela. Rehúsa el afiche gritón recortado y el hero SaaS con orbes.
OWN-WORLD: Foto real del kiosco; campo #0F0A1E; blanco; morado #5B21B6; teal #0F766E como única puerta. Sans geométrica Poppins. Radio 4px.
STORY: Quien llega de Instagram ve el lugar, la fecha y que es gratis, y se registra en Luma.
FIRST VIEWPORT: Foto noche del Parque Centroamérica a 100svh. Logo, AI Builders, Xela (brand) 2026 (teal), fecha, sede, 100% Gratis y CTA centrados en el vano, con velo de ink.
FORM: Arco cívico de Xela (Parque Centroamérica / kiosco); seed 4c2d6d65; composición de cartel en el vano, fotos del organizador.
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

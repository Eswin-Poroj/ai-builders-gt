import type { Metadata } from "next"
import { Poppins, Barlow_Condensed } from "next/font/google"
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

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
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
    <html lang="es" className={`${sans.variable} ${display.variable}`}>
      <body className={sans.className}>
        <a className="skip" href="#sobre">
          Saltar al contenido
        </a>
        <JsonLd />
        {children}
      </body>
    </html>
  )
}

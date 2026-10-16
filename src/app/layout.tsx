import type { Metadata } from "next"
import { Poppins, Barlow_Condensed } from "next/font/google"
import type { ReactNode } from "react"
import { SkipLink } from "@/components/ui/skip-link"
import { community } from "@/content/community"
import { HERO_PHOTO } from "@/content/hero-photo"
import { SITE_URL } from "@/lib/site"
import "./globals.css"
import "@/components/ui/ui.css"

const sans = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sans",
  display: "swap",
  preload: false,
})

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-display",
  display: "swap",
  preload: false,
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: community.seo.title,
  description: community.seo.description,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: community.seo.title,
    description: community.seo.description,
    url: SITE_URL,
    siteName: community.name,
    locale: "es_GT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: community.seo.title,
    description: community.seo.description,
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="es-GT"
      translate="no"
      className={`notranslate ${sans.variable} ${display.variable}`}
    >
      <head>
        <link
          rel="preload"
          as="image"
          href={HERO_PHOTO.src}
          type={HERO_PHOTO.type}
          fetchPriority="high"
        />
      </head>
      <body className={sans.className}>
        <SkipLink />
        {children}
      </body>
    </html>
  )
}

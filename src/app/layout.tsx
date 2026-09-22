import type { Metadata } from "next"
import { Poppins, Barlow_Condensed } from "next/font/google"
import { community } from "@/content/community"
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${sans.variable} ${display.variable}`}>
      <body className={sans.className}>
        <a className="skip" href="#inicio">
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  )
}

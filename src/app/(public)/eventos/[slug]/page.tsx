import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { EventArchive } from "@/components/event-archive"
import { FooterSection } from "@/components/sections/footer"
import {
  editionPath,
  getEdition,
  listEditionSlugs,
} from "@/content/editions"
import { SITE_URL } from "@/lib/site"

export const dynamic = "force-static"
export const dynamicParams = false

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return listEditionSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const edition = getEdition(slug)
  if (!edition) return {}

  const url = `${SITE_URL}${editionPath(slug)}`
  return {
    title: edition.seo.title,
    description: edition.seo.description,
    alternates: { canonical: url },
    openGraph: {
      title: edition.seo.title,
      description: edition.seo.description,
      url,
      siteName: edition.communityName,
      locale: "es_GT",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: edition.seo.title,
      description: edition.seo.description,
    },
  }
}

export default async function EventPage({ params }: PageProps) {
  const { slug } = await params
  const edition = getEdition(slug)
  if (!edition) notFound()

  return (
    <main>
      <EventArchive pageUrl={`${SITE_URL}${editionPath(slug)}`} />
      <FooterSection />
    </main>
  )
}

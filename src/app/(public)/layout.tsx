import type { ReactNode } from "react"
import { SiteNav } from "@/components/site-nav"

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteNav />
      {children}
    </>
  )
}

import type { Metadata } from "next"
import type { ReactNode } from "react"
import "@/components/jurados/jurados.css"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Jurados",
  robots: { index: false, follow: false },
}

export default function JuradosRootLayout({ children }: { children: ReactNode }) {
  return <div className="jurados">{children}</div>
}

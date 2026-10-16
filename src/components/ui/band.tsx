import type { ReactNode } from "react"
import { cn } from "@/lib/cn"

type Props = {
  href: string
  children: ReactNode
  className?: string
  placement?: string
}

export function Band({ href, children, className, placement }: Props) {
  const external = href.startsWith("http")

  return (
    <a
      className={cn("band", className)}
      href={href}
      data-cta={placement}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </a>
  )
}

import type { ReactNode } from "react"
import { cn } from "@/lib/cn"

type Props = {
  href?: string
  children: ReactNode
  className?: string
}

export function Chip({ href, children, className }: Props) {
  const classes = cn("chip", className)
  if (!href) {
    return <span className={classes}>{children}</span>
  }

  const external = href.startsWith("http")
  return (
    <a
      className={classes}
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </a>
  )
}

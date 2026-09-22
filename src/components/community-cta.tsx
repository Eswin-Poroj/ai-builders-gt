import type { ReactNode } from "react"
import { getCommunityHref, getPrimaryDoor } from "@/lib/community"

type Props = {
  placement: "hero" | "mid" | "final"
  label?: string
  href?: string
  className?: string
  leading?: ReactNode
}

export function CommunityCta({
  placement,
  label,
  href,
  className = "band",
  leading,
}: Props) {
  const door = getPrimaryDoor()
  const target = href ?? getCommunityHref(door.id)
  const text = label ?? door.label
  const external = target.startsWith("http")

  return (
    <a
      className={className}
      href={target}
      data-cta={`community-${placement}`}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {leading}
      {text}
    </a>
  )
}

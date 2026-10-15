import type { ReactNode } from "react"
import { Band } from "@/components/ui/band"
import { COMMUNITY_CTA_LABEL } from "@/content/community"
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
  className,
  leading,
}: Props) {
  const door = getPrimaryDoor()
  const target = href ?? getCommunityHref(door.id)
  const text = label ?? door.label ?? COMMUNITY_CTA_LABEL

  return (
    <Band href={target} className={className} placement={`community-${placement}`}>
      {leading}
      {text}
    </Band>
  )
}

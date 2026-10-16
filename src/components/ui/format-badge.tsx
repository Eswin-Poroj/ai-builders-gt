import type { EventFormat } from "@/content/events"
import { formatLabel } from "@/content/events"
import { cn } from "@/lib/cn"

type Props = {
  format: EventFormat
  className?: string
}

export function FormatBadge({ format, className }: Props) {
  return (
    <span
      className={cn("format-badge", `format-badge--${format}`, className)}
    >
      {formatLabel(format)}
    </span>
  )
}

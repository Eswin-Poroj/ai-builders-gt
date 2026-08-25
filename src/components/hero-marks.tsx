import type { ReactNode } from "react"

type MarkProps = {
  className?: string
}

function Mark({
  className,
  children,
}: MarkProps & { children: ReactNode }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

export function CalendarMark({ className }: MarkProps) {
  return (
    <Mark className={className}>
      <rect x="4" y="6.5" width="16" height="13.5" rx="2" />
      <path d="M8 4.5v4M16 4.5v4M4 11h16" />
    </Mark>
  )
}

export function PinMark({ className }: MarkProps) {
  return (
    <Mark className={className}>
      <path d="M12 21s-6.5-5.8-6.5-11a6.5 6.5 0 1 1 13 0c0 5.2-6.5 11-6.5 11z" />
      <circle cx="12" cy="10" r="2.15" />
    </Mark>
  )
}

export function GiftMark({ className }: MarkProps) {
  return (
    <Mark className={className}>
      <rect x="4.5" y="11" width="15" height="8.5" rx="1.2" />
      <path d="M4.5 11h15M12 11v8.5" />
      <path d="M12 11c0 0-3.6-5.2-5.6-3.4C5 9 8.2 11 12 11" />
      <path d="M12 11c0 0 3.6-5.2 5.6-3.4C19 9 15.8 11 12 11" />
    </Mark>
  )
}

export function PersonMark({ className }: MarkProps) {
  return (
    <Mark className={className}>
      <circle cx="12" cy="8" r="3" />
      <path d="M6.2 19c.4-3.1 2.8-4.8 5.8-4.8s5.4 1.7 5.8 4.8" />
    </Mark>
  )
}

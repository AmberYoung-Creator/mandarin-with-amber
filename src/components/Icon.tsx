import type { ReactNode } from 'react'

type IconProps = { children: ReactNode; label?: string; className?: string }

export function Icon({ children, label, className }: IconProps) {
  return (
    <svg
      aria-hidden={label ? undefined : true}
      aria-label={label}
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  )
}

export function ArrowUpRight() {
  return <Icon><path d="M5 19 19 5M8 5h11v11" /></Icon>
}

export function CloseIcon() {
  return <Icon><path d="m6 6 12 12M18 6 6 18" /></Icon>
}

export function MenuIcon() {
  return <Icon><path d="M4 7h16M4 12h16M4 17h16" /></Icon>
}

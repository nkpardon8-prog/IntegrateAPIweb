import type { ReactNode } from 'react'

interface BaseServiceGraphicProps {
  children: ReactNode
}

export function BaseServiceGraphic({ children }: BaseServiceGraphicProps) {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

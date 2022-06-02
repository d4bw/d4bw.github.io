import type { ValueOf } from "../../types"


interface CardProps {
  variant: ValueOf<typeof CardVariant>
}

export const CardVariant = {
  Default: 'default',
  FullWidth: 'full-width',
  Subtopic: 'subtopic',
} as const

export default function Card({ variant }: CardProps) {
  return (
    <>

    </>
  )
}
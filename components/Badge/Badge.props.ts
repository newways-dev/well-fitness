import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface BadgeProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  type: 'new' | 'percentage' | 'like' | string
}

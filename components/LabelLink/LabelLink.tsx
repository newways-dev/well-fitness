import Link from 'next/link'
import { ReactNode } from 'react'
import { hrefFor } from '../../lib/routes'

export interface LabelLinkProps {
  label: string
  className?: string
  children?: ReactNode
}

export const LabelLink = ({ label, className, children }: LabelLinkProps) => {
  return (
    <Link href={hrefFor(label)}>
      <a className={className}>{children ?? label}</a>
    </Link>
  )
}

import Link from 'next/link'
import Icon from '../logo.svg'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface LogoProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Logo = ({ className }: LogoProps) => {
  return (
    <div className={className}>
      <Link href="/">
        <a aria-label="На главную">
          <Icon />
        </a>
      </Link>
    </div>
  )
}

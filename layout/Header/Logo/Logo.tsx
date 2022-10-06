import Icon from '../logo.svg'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface LogoProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Logo = ({ className }: LogoProps) => {
  return (
    <div className={className}>
      <Icon />
    </div>
  )
}

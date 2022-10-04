import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface TitleProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode
}

export const Title = ({ children, className }: TitleProps) => {
  return <span className={className}>{children}</span>
}

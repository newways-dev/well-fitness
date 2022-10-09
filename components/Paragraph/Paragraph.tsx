import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface ParagraphProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: string
}

export const Paragraph = ({ children, className }: ParagraphProps) => {
  return <p className={className}>{children}</p>
}

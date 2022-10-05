import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface ParagraphProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: string
}

export const Paragraph = ({ children }: ParagraphProps) => {
  return <p>{children}</p>
}

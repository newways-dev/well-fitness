import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface InStockProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  value: -1 | 0 | 1 | 2
}

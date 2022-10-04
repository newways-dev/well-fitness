import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { InStockEnum } from '../ProductCard/ProductCard.props'

export interface InStockProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  value: InStockEnum
}

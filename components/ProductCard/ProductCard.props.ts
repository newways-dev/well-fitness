import { StaticImageData } from 'next/image'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface ProductCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  badges: string[]
  icons: boolean
  inStock: -1 | 0 | 1 | 2
  image: StaticImageData
  title: string
  rating: number
  price: string
  oldPrice: string
  button: boolean
}

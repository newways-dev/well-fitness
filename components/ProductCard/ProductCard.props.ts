import { StaticImageData } from 'next/image'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export enum InStockEnum {
  inStock,
  littleLeft,
  notInStock,
  coming,
}

type CharacteristicType = {
  title: string
  description: string
}

export interface ProductCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  badges?: string[]
  icons?: boolean
  inStock?: InStockEnum
  image: string | StaticImageData
  title: string
  rating: number
  price: string
  oldPrice?: string
  button?: boolean
  onBuy?: () => void
  cartQuantity?: number
  imgW?: number
  imgH?: number
  imgFill?: boolean
  characteristics?: CharacteristicType[]
}

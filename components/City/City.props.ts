import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface CityProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  city: string
}

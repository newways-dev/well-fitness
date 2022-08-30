import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface IconProps
  extends DetailedHTMLProps<HTMLAttributes<SVGAElement>, SVGAElement> {
  name:
    | 'favorites'
    | 'search'
    | 'compare'
    | 'user'
    | 'cart'
    | 'arrow-down'
    | 'arrow'
    | 'menu'
    | 'star'
}

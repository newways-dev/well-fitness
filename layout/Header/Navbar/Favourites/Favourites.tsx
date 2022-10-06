import { Icon } from '../../../../components'

import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface FavouritesProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Favourites = ({ className }: FavouritesProps) => {
  return (
    <div className={className}>
      <Icon name="compare" />
      <Icon name="favorites" />
      <Icon name="cart" />
    </div>
  )
}

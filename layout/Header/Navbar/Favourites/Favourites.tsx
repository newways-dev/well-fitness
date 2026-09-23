import Link from 'next/link'
import { Icon } from '../../../../components'
import { useCart } from '../../../../context/CartContext'
import styles from './Favourites.module.scss'

import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface FavouritesProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Favourites = ({ className }: FavouritesProps) => {
  const { count } = useCart()

  return (
    <div className={className}>
      <Icon name="compare" />
      <Icon name="favorites" />
      <Link href="/cart">
        <a
          className={styles.cart}
          aria-label={count > 0 ? `Корзина, товаров: ${count}` : 'Корзина'}
        >
          <Icon name="cart" />
          {count > 0 && <span className={styles.badge}>{count}</span>}
        </a>
      </Link>
    </div>
  )
}

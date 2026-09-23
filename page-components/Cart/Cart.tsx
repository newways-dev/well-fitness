import Image from 'next/image'
import { useRouter } from 'next/router'
import { useMemo, useState } from 'react'
import styles from './Cart.module.scss'

import image from '../CardioEquipments/CardioEquipmentsB37.png'
import { Button, Htag, InStock } from '../../components'
import { useCart } from '../../context/CartContext'
import { cardioEquipments } from '../../helpers/cardioEquipments'
import { MAX_QUANTITY, resolveLines, totalPrice } from '../../lib/cart'
import { formatPrice, pluralizeProducts } from '../../lib/catalog'

export const Cart = () => {
  const router = useRouter()
  const { lines, hydrated, setQuantity, remove, clear } = useCart()
  const [ordered, setOrdered] = useState(false)

  const entries = useMemo(
    () => resolveLines(lines, cardioEquipments),
    [lines],
  )
  const itemsCount = entries.reduce((sum, entry) => sum + entry.quantity, 0)
  const total = totalPrice(entries)

  if (!hydrated) {
    return <div className={styles.placeholder} />
  }

  if (entries.length === 0) {
    return (
      <div className={styles.empty}>
        <Htag tag="h2" className={styles.emptyTitle}>
          Your cart is empty
        </Htag>
        <p className={styles.emptyText}>
          Add equipment from the catalog and it will show up here.
        </p>
        <Button
          variant="primary"
          onClick={() => router.push('/cardio-equipments')}
        >
          Browse the catalog
        </Button>
      </div>
    )
  }

  return (
    <div className={styles.cart}>
      <ul className={styles.list}>
        {entries.map(({ product, quantity }) => (
          <li key={product.id} className={styles.item}>
            <div className={styles.image}>
              <Image
                src={image}
                alt=""
                width={110}
                height={110}
                objectFit="contain"
              />
            </div>
            <div className={styles.info}>
              <Htag tag="h3" className={styles.title}>
                {product.title}
              </Htag>
              <InStock value={product.inStock} />
              <span className={styles.unitPrice}>
                {formatPrice(product.price)} each
              </span>
            </div>
            <div className={styles.quantity}>
              <button
                type="button"
                className={styles.step}
                aria-label="Decrease quantity"
                disabled={quantity <= 1}
                onClick={() => setQuantity(product.id, quantity - 1)}
              >
                −
              </button>
              <span className={styles.count} aria-live="polite">
                {quantity}
              </span>
              <button
                type="button"
                className={styles.step}
                aria-label="Increase quantity"
                disabled={quantity >= MAX_QUANTITY}
                onClick={() => setQuantity(product.id, quantity + 1)}
              >
                +
              </button>
            </div>
            <div className={styles.lineTotal}>
              {formatPrice(product.price * quantity)}
            </div>
            <button
              type="button"
              className={styles.remove}
              aria-label={`Remove ${product.title}`}
              onClick={() => remove(product.id)}
            >
              ×
            </button>
          </li>
        ))}
      </ul>
      <aside className={styles.summary}>
        <Htag tag="h2" className={styles.summaryTitle}>
          Your order
        </Htag>
        <div className={styles.row}>
          <span>{pluralizeProducts(itemsCount)}</span>
          <span>{formatPrice(total)}</span>
        </div>
        <div className={styles.total}>
          <span>Total</span>
          <span>{formatPrice(total)}</span>
        </div>
        <Button
          className={styles.order}
          variant="primary"
          onClick={() => setOrdered(true)}
        >
          Checkout
        </Button>
        {ordered && (
          <p className={styles.notice} role="status">
            This is a storefront demo without a backend: checkout is not connected.
          </p>
        )}
        <button type="button" className={styles.clear} onClick={clear}>
          Clear cart
        </button>
      </aside>
    </div>
  )
}

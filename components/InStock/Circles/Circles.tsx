import styles from './Circles.module.scss'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { InStockEnum } from '../../ProductCard/ProductCard.props'
import clsx from 'clsx'

export interface CirclesProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  stock: InStockEnum
}

export const Circles = ({ stock }: CirclesProps) => {
  switch (stock) {
    case InStockEnum.inStock:
      return (
        <div className={styles.circles}>
          <span className={clsx(styles.circle, styles.inStock)} />
          <span className={clsx(styles.circle, styles.inStock)} />
          <span className={clsx(styles.circle, styles.inStock)} />
        </div>
      )
    case InStockEnum.littleLeft:
      return (
        <div className={styles.circles}>
          <span className={clsx(styles.circle, styles.littleLeft)} />
          <span className={clsx(styles.circle, styles.littleLeft)} />
          <span className={clsx(styles.circle, styles.littleLeft)} />
        </div>
      )
    case InStockEnum.notInStock:
      return (
        <div className={styles.circles}>
          <span className={clsx(styles.circle, styles.notInStock)} />
          <span className={clsx(styles.circle, styles.notInStock)} />
          <span className={clsx(styles.circle, styles.notInStock)} />
        </div>
      )
    case InStockEnum.coming:
      return (
        <div className={styles.circles}>
          <span className={clsx(styles.circle, styles.coming)} />
          <span className={clsx(styles.circle, styles.coming)} />
          <span className={clsx(styles.circle, styles.coming)} />
        </div>
      )

    default:
      return <></>
  }
}

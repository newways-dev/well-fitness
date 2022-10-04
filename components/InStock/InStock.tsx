import { InStockEnum } from '../ProductCard/ProductCard.props'
import { InStockProps } from './InStock.props'
import styles from './InStock.module.scss'
import clsx from 'clsx'
import { Circles } from './Circles/Circles'

export const InStock = ({ value, className }: InStockProps) => {
  switch (value) {
    case InStockEnum.notInStock:
      return (
        <span className={clsx(styles.no, className)}>
          Нет в наличии
          <Circles stock={InStockEnum.notInStock} />
        </span>
      )
    case InStockEnum.inStock:
      return (
        <span className={clsx(styles.ok, className)}>
          В наличии
          <Circles stock={InStockEnum.inStock} />
        </span>
      )
    case InStockEnum.littleLeft:
      return (
        <span className={clsx(styles.little, className)}>
          Осталось немного
          <Circles stock={InStockEnum.littleLeft} />
        </span>
      )
    case InStockEnum.coming:
      return (
        <span className={clsx(styles.coming, className)}>
          Скоро ожидается
          <Circles stock={InStockEnum.coming} />
        </span>
      )
    default:
      return <></>
  }
}

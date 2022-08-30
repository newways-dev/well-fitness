import { InStockProps } from './InStock.props'
import styles from './InStock.module.scss'

export const InStock = ({ value }: InStockProps): JSX.Element => {
  return (
    <div className={styles.inStock}>
      {value === -1 && <span className={styles.no}>Нет в наличии</span>}
      {/* {value === 0 && <span className={styles.little}>Осталось немного</span>} */}
      {value === 1 && <span className={styles.ok}>В наличии</span>}
      {value === 2 && <span className={styles.ok}>В наличии</span>}
    </div>
  )
}

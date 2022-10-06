import { City } from '../City/City'
import { CallProps } from './Call.props'
import styles from './Call.module.scss'
import clsx from 'clsx'

export const Call = ({ className }: CallProps): JSX.Element => {
  return (
    <div className={clsx(styles.call, className)}>
      <span className={styles.number}>+7 (800) 000-00-00</span>
      <City className={styles.city} city="МСК" />
      <button className={styles.button}>Заказать звонок</button>
    </div>
  )
}

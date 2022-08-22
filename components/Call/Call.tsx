import { City } from '../City/City'
import { CallProps } from './Call.props'
import styles from './Call.module.scss'

export const Call = ({}: CallProps): JSX.Element => {
  return (
    <div className={styles.call}>
      <span className={styles.number}>+7 (800) 000-00-00</span>
      <City className={styles.city} city='МСК' />
      <button className={styles.button}>Заказать звонок</button>
    </div>
  )
}

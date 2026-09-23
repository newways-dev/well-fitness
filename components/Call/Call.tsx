import { City } from '../City/City'
import { CallProps } from './Call.props'
import styles from './Call.module.scss'
import clsx from 'clsx'

export const Call = ({ className }: CallProps): JSX.Element => {
  return (
    <div className={clsx(styles.call, className)}>
      <span className={styles.number}>+49 (0) 000 000 00 00</span>
      <City className={styles.city} city="CET" />
      <button className={styles.button}>Request a call</button>
    </div>
  )
}

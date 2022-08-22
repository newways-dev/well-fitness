import styles from './Dillers.module.scss'
import { DillersProps } from './Dillers.props'

export const Dillers = ({}: DillersProps): JSX.Element => {
  return (
    <div className={styles.dillers}>
      <span className={styles.link}>Для дилеров</span>
      <button className={styles.button}>Become a Partner</button>
    </div>
  )
}

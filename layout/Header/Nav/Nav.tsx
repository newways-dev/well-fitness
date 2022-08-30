import { Icon } from '../../../components'
import styles from './Nav.module.scss'

export const Nav = (): JSX.Element => {
  return (
    <div className={styles.nav}>
      <div className={styles.dropdown}>
        <div className={styles.home}>
          <span>
            Для дома
            <Icon className={styles.arrow} name='arrow-down' />
          </span>
        </div>
        <div className={styles.fitness}>
          <span>
            Для фитнес клуба
            <Icon className={styles.arrow} name='arrow-down' />
          </span>
        </div>
      </div>
    </div>
  )
}

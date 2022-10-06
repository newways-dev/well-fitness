import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Icon } from '../../../components'
import styles from './Nav.module.scss'

export interface NavProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Nav = ({ className }: NavProps) => {
  return (
    <div className={clsx(styles.nav, className)}>
      <div className={styles.wrapper}>
        <div className={styles.dropdown}>
          <div className={styles.home}>
            <span>
              Для дома
              <Icon className={styles.arrow} name="arrow-down" />
            </span>
          </div>
          <div className={styles.fitness}>
            <span>
              Для фитнес клуба
              <Icon className={styles.arrow} name="arrow-down" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

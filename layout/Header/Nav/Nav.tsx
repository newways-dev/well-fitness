import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Icon, LabelLink } from '../../../components'
import styles from './Nav.module.scss'

export interface NavProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Nav = ({ className }: NavProps) => {
  return (
    <div className={clsx(styles.nav, className)}>
      <div className={styles.wrapper}>
        <div className={styles.dropdown}>
          <div className={styles.home}>
            <LabelLink label="Для дома">
              Для дома
              <Icon className={styles.arrow} name="arrow-down" />
            </LabelLink>
          </div>
          <div className={styles.fitness}>
            <LabelLink label="Для фитнес клуба">
              Для фитнес клуба
              <Icon className={styles.arrow} name="arrow-down" />
            </LabelLink>
          </div>
        </div>
      </div>
    </div>
  )
}

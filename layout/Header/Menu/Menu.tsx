import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Menu.module.scss'

export interface MenuProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Menu = ({ className }: MenuProps) => {
  return (
    <div className={clsx(styles.menu, className)}>
      <span className={styles.line} />
      <span className={styles.line} />
      <span className={styles.line} />
    </div>
  )
}

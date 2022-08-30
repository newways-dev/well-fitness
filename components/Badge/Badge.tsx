import clsx from 'clsx'
import styles from './Badge.module.scss'
import { BadgeProps } from './Badge.props'

import New from './icons/new.svg'
import Like from './icons/like.svg'
import Percentage from './icons/percentage.svg'

export const Badge = ({ type, className }: BadgeProps): JSX.Element => {
  switch (type) {
    case 'new':
      return (
        <div className={clsx(styles.new, className, styles.badge)}>
          {<New />}
        </div>
      )
    case 'like':
      return (
        <div className={clsx(styles.like, className, styles.badge)}>
          {<Like />}
        </div>
      )
    case 'percentage':
      return (
        <div className={clsx(styles.percentage, className, styles.badge)}>
          {<Percentage />}
        </div>
      )
    default:
      return <></>
  }
}

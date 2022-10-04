import { RatingProps } from './Rating.props'
import styles from './Rating.module.scss'
import { Icon } from '../Icon/Icon'
import clsx from 'clsx'

export const Rating = ({ className }: RatingProps): JSX.Element => {
  return (
    <div className={clsx(styles.rating, className)}>
      <span className={styles.title}>Рейтинг</span>
      <Icon name="star" />
      <Icon name="star" />
      <Icon name="star" />
      <Icon name="star" />
      <Icon name="star" />
    </div>
  )
}

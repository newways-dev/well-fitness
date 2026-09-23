import { RatingProps } from './Rating.props'
import styles from './Rating.module.scss'
import { Icon } from '../Icon/Icon'
import clsx from 'clsx'

const STARS = [1, 2, 3, 4, 5]

export const Rating = ({ className, value = 5 }: RatingProps): JSX.Element => {
  return (
    <div
      className={clsx(styles.rating, className)}
      aria-label={`Rating ${value} out of 5`}
    >
      <span className={styles.title}>Rating</span>
      {STARS.map((star) => (
        <Icon
          key={star}
          name="star"
          className={clsx({ [styles.inactive]: star > value })}
        />
      ))}
    </div>
  )
}

import { RatingProps } from './Rating.props'
import styles from './Rating.module.scss'
import { Icon } from '../Icon/Icon'

export const Rating = ({}: RatingProps): JSX.Element => {
  return (
    <div className={styles.rating}>
      <span className={styles.title}>Рейтинг</span>
      <Icon name='star' />
      <Icon name='star' />
      <Icon name='star' />
      <Icon name='star' />
      <Icon name='star' />
    </div>
  )
}

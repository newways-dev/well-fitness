import ArrowDown from './arrow.svg'
import { CityProps } from './City.props'
import styles from './City.module.scss'
import { Icon } from '../Icon/Icon'

export const City = ({ city }: CityProps): JSX.Element => {
  return (
    <div className={styles.city}>
      <span className={styles.cityTitle}>{city}</span>
      <Icon className={styles.arrow} name='arrow' />
    </div>
  )
}

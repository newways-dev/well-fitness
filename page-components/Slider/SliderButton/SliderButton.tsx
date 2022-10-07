import clsx from 'clsx'
import { SliderButtonProps } from './SliderButton.props'
import { Icon } from '../../../components'
import styles from './SliderButton.module.scss'

export const SliderButton = ({ className, onClick }: SliderButtonProps) => {
  return (
    <button onClick={onClick} className={clsx(styles.elipse, className)}>
      <Icon className={styles.arrow} name="arrow" />
    </button>
  )
}

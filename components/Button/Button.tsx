import clsx from 'clsx'
import { ButtonProps } from './Button.props'
import styles from './Button.module.scss'

export const Button = ({
  children,
  variant,
  className,
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={clsx(styles.button, className, {
        [styles.primary]: variant == 'primary',
        [styles.outlined]: variant == 'outlined',
      })}
    >
      {children}
    </button>
  )
}

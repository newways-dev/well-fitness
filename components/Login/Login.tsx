import { LoginProps } from './Login.props'
import User from './user.svg'
import styles from './Login.module.scss'
import { Icon } from '../Icon/Icon'
import clsx from 'clsx'

export const Login = ({ className }: LoginProps): JSX.Element => {
  return (
    <div className={clsx(styles.login, className)}>
      <a href="" className={styles.link}>
        Войти
      </a>
      <Icon className={styles.icon} name="user" />
    </div>
  )
}

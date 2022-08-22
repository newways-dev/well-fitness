import { LoginProps } from './Login.props'
import User from './user.svg'
import styles from './Login.module.scss'
import { Icon } from '../Icon/Icon'

export const Login = ({}: LoginProps): JSX.Element => {
  return (
    <div className={styles.login}>
      <a href='' className={styles.link}>
        Войти
      </a>
      <Icon className={styles.icon} name='user' />
    </div>
  )
}

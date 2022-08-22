import { Call, City, Dillers, Login } from '../../components'
import { Navbar } from './Navbar/Navbar'
import { Nav } from './Nav/Nav'
import Logo from './logo.svg'

import styles from './Header.module.scss'
import { HeaderProps } from './Header.props'

export const Header = ({}: HeaderProps): JSX.Element => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.city}>
          <City city='Москва' />
        </div>
        <div className={styles.dillers}>
          <Dillers />
        </div>
        <Call className={styles.call} />
        <Login className={styles.login} />
      </div>
      <Navbar />
      <Nav />
    </>
  )
}

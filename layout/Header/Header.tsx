import { Call, City, Dillers, Login, Search } from '../../components'
import { Navbar } from './Navbar/Navbar'
import { Nav } from './Nav/Nav'

import styles from './Header.module.scss'
import { HeaderProps } from './Header.props'
import { Favourites } from './Navbar/Favourites/Favourites'
import { Menu } from './Menu/Menu'
import { Logo } from './Logo/Logo'

export const Header = ({}: HeaderProps): JSX.Element => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.wrapper}>
          <Logo className={styles.logo} />
          {/* <div className={styles.logo}>
          </div> */}
          <div className={styles.city}>
            <City city="Москва" />
          </div>
          <div className={styles.dillers}>
            <Dillers />
          </div>
          <Call className={styles.call} />
          <Login className={styles.login} />
          <div className={styles.search}>
            <Search />
          </div>
          <div className={styles.favourites}>
            <Favourites />
          </div>
          <div className={styles.menu}>
            <Menu />
          </div>
        </div>
      </div>
      <Navbar className={styles.navbar} />
      <Nav className={styles.nav} />
    </>
  )
}

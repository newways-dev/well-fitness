import { NavbarProps } from './Navbar.props'
import { Button, Icon, Links, Search } from '../../../components'
import styles from './Navbar.module.scss'

export const Navbar = ({}: NavbarProps): JSX.Element => {
  return (
    <div className={styles.navbar}>
      <div className={styles.wrapper}>
        <Button className={styles.button} variant="primary">
          <Icon className={styles.menuIcon} name="menu" />
          Каталог
        </Button>
        <Search className={styles.search} />
        <Links className={styles.links} />
        <div className={styles.icons}>
          <Icon className={styles.icon} name="compare" />
          <Icon name="favorites" />
          <Icon name="cart" />
        </div>
      </div>
    </div>
  )
}

import { useRouter } from 'next/router'
import { NavbarProps } from './Navbar.props'
import { Button, Icon, Links, Search } from '../../../components'
import styles from './Navbar.module.scss'
import { Favourites } from './Favourites/Favourites'
import clsx from 'clsx'

export const Navbar = ({ className }: NavbarProps): JSX.Element => {
  const router = useRouter()

  return (
    <div className={clsx(styles.navbar, className)}>
      <div className={styles.wrapper}>
        <Button
          className={styles.button}
          variant="primary"
          onClick={() => router.push('/#catalog')}
        >
          <Icon className={styles.menuIcon} name="menu" />
          Каталог
        </Button>
        <Search className={styles.search} />
        <Links className={styles.links} />
        <Favourites className={styles.favourites} />
      </div>
    </div>
  )
}

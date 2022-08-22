import { LinksProps } from './Links.props'
import { links } from './linksArray'
import styles from './Links.module.scss'

export const Links = ({}: LinksProps): JSX.Element => {
  return (
    <ul className={styles.list}>
      {links.map((link) => (
        <li key={link} className={styles.link}>
          {link}
        </li>
      ))}
    </ul>
  )
}

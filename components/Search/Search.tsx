import clsx from 'clsx'
import { SearchProps } from './Search.props'
import SearchIcon from './search.svg'
import styles from './Search.module.scss'

export const Search = ({ className }: SearchProps): JSX.Element => {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <div className={styles.search}>
        <SearchIcon className={styles.icon} />
      </div>
    </div>
  )
}

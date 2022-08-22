import clsx from 'clsx'
import { SearchProps } from './Search.props'
import SearchIcon from './search.svg'
import styles from './Search.module.scss'
import { useState } from 'react'

export const Search = ({}: SearchProps): JSX.Element => {
  const [active, setActive] = useState<boolean>(false)

  return (
    <div className={styles.wrapper}>
      <div className={styles.search}>
        <SearchIcon
          onMouseOver={() => setActive(true)}
          onMouseOut={() => setActive(false)}
          className={styles.icon}
        />
      </div>
    </div>
  )
}

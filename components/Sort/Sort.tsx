import clsx from 'clsx'
import { useState } from 'react'
import styles from './Sort.module.scss'

const sort = ['По популярности', 'По новизне', 'По цене', 'По рейтингу']

export const Sort = () => {
  const [active, setActive] = useState<number>(0)

  return (
    <div className={styles.sort}>
      <ul className={styles.list}>
        {sort.map((sortItem, index) => (
          <li
            onClick={() => setActive(index)}
            key={index}
            className={clsx(styles.item, { [styles.active]: active === index })}
          >
            {sortItem}
          </li>
        ))}
      </ul>
    </div>
  )
}

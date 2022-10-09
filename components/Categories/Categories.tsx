import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes, useState } from 'react'
import styles from './Categories.module.scss'

export interface CategoriesProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  categories: string[]
}

export const Categories = ({ categories }: CategoriesProps) => {
  const [active, setActive] = useState<number>(0)

  return (
    <div className={styles.categories}>
      <ul className={styles.list}>
        {categories.map((category, index) => (
          <li
            onClick={() => setActive(index)}
            key={index}
            className={clsx(styles.item, { [styles.active]: active === index })}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  )
}

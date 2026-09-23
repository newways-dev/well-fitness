import clsx from 'clsx'
import styles from './Categories.module.scss'

export interface CategoriesProps {
  categories: string[]
  active: number
  onChange: (index: number) => void
}

export const Categories = ({
  categories,
  active,
  onChange,
}: CategoriesProps) => {
  return (
    <div className={styles.categories}>
      <ul className={styles.list}>
        {categories.map((category, index) => (
          <li
            onClick={() => onChange(index)}
            key={category}
            className={clsx(styles.item, { [styles.active]: active === index })}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  )
}

import clsx from 'clsx'
import styles from './Sort.module.scss'

export interface SortOption<T extends string = string> {
  key: T
  label: string
}

export interface SortProps<T extends string = string> {
  options: SortOption<T>[]
  value: T
  onChange: (key: T) => void
}

export const Sort = <T extends string>({
  options,
  value,
  onChange,
}: SortProps<T>) => {
  return (
    <div className={styles.sort}>
      <ul className={styles.list}>
        {options.map((option) => (
          <li
            onClick={() => onChange(option.key)}
            key={option.key}
            className={clsx(styles.item, {
              [styles.active]: value === option.key,
            })}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  )
}

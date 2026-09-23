import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Checkbox } from '../Checkbox/Checkbox'
import { Title } from '../Title/Title'
import styles from './Filters.module.scss'

export interface FiltersProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string
  types: string[]
  selected: string[]
  onToggle: (type: string) => void
}

export const Filters = ({ title, types, selected, onToggle }: FiltersProps) => {
  return (
    <div className={styles.filters}>
      <Title className={styles.title}>{title}</Title>
      <ul className={styles.list}>
        {types.map((type) => (
          <li className={styles.item} key={type}>
            <label className={styles.label}>
              <Checkbox
                className={styles.checkbox}
                checked={selected.includes(type)}
                onChange={() => onToggle(type)}
              />
              {type}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

import clsx from 'clsx'
import { InputHTMLAttributes } from 'react'
import styles from './Checkbox.module.scss'

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Checkbox = ({ className, ...props }: CheckboxProps) => {
  return (
    <input
      type="checkbox"
      className={clsx(styles.checkbox, className)}
      {...props}
    />
  )
}

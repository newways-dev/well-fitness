import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Checkbox.module.scss'

export interface CheckboxProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export const Checkbox = ({ className }: CheckboxProps) => {
  return <input type="checkbox" className={clsx(styles.checkbox, className)} />
}

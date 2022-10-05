import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Input.module.scss'

export interface InputProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  placeholder: string
}

export const Input = ({ placeholder, className }: InputProps) => {
  return (
    <input
      className={clsx(className, styles.input)}
      placeholder={placeholder}
    />
  )
}

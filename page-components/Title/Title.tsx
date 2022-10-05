import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Title.module.scss'

export interface TitleProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  title: string
}

export const Title = ({ title, className }: TitleProps) => {
  return <span className={clsx(styles.title, className)}>{title}</span>
}

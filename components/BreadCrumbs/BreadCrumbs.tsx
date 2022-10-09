import clsx from 'clsx'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './BreadCrumbs.module.scss'
import { Icon } from '../Icon/Icon'
import { Paragraph } from '../Paragraph/Paragraph'

export interface BreadCrumbsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  location: string
}

export const BreadCrumbs = ({ className, location }: BreadCrumbsProps) => {
  return (
    <div className={clsx(styles.breadCrumbs, className)}>
      <Icon name="home" />
      <Paragraph className={styles.location}>{location}</Paragraph>
    </div>
  )
}

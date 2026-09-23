import clsx from 'clsx'
import Link from 'next/link'
import { DetailedHTMLProps, Fragment, HTMLAttributes } from 'react'
import styles from './BreadCrumbs.module.scss'
import { Icon } from '../Icon/Icon'
import { LabelLink } from '../LabelLink/LabelLink'

export interface BreadCrumbsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  location: string
}

export const BreadCrumbs = ({ className, location }: BreadCrumbsProps) => {
  const parts = location
    .split('>')
    .map((part) => part.trim())
    .filter(Boolean)

  return (
    <div className={clsx(styles.breadCrumbs, className)}>
      <Link href="/">
        <a aria-label="Главная">
          <Icon name="home" />
        </a>
      </Link>
      <p className={styles.location}>
        {parts.map((part, index) => (
          <Fragment key={part}>
            {index > 0 && ' > '}
            {index < parts.length - 1 ? (
              <LabelLink label={part} className={styles.crumb} />
            ) : (
              part
            )}
          </Fragment>
        ))}
      </p>
    </div>
  )
}

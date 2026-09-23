import clsx from 'clsx'
import Image from 'next/image'
import { ReactNode } from 'react'
import styles from './Banner.module.scss'

export interface BannerProps {
  image: string
  title: string
  highlight?: string
  caption?: string
  action?: ReactNode
  tone?: 'red' | 'dark'
  overlay?: 'left' | 'top'
  imagePosition?: string
  sizes?: string
  priority?: boolean
  className?: string
}

export const Banner = ({
  image,
  title,
  highlight,
  caption,
  action,
  tone = 'dark',
  overlay = 'left',
  imagePosition = 'center',
  sizes,
  priority,
  className,
}: BannerProps) => {
  return (
    <div
      className={clsx(
        styles.banner,
        styles[tone],
        styles[overlay],
        className,
      )}
    >
      <Image
        src={image}
        alt=""
        layout="fill"
        objectFit="cover"
        objectPosition={imagePosition}
        sizes={sizes}
        priority={priority}
      />
      <div className={styles.shade} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        {highlight && <span className={styles.highlight}>{highlight}</span>}
        {caption && <p className={styles.caption}>{caption}</p>}
        {action && <div className={styles.action}>{action}</div>}
      </div>
    </div>
  )
}

import clsx from 'clsx'
import Image from 'next/image'
import { CardProps } from './Card.props'
import styles from './Card.module.scss'

export const Card = ({ title, image, className }: CardProps): JSX.Element => {
  return (
    <div className={clsx(className, styles.card)}>
      <span className={styles.title}>{title}</span>
      <Image src={image} alt='' />
    </div>
  )
}

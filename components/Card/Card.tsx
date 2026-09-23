import clsx from 'clsx'
import Image from 'next/image'
import { CardProps } from './Card.props'
import styles from './Card.module.scss'
import { Htag } from '../Htag/Htag'
import { LabelLink } from '../LabelLink/LabelLink'

export const Card = ({ title, image, className }: CardProps): JSX.Element => {
  return (
    <div className={clsx(className, styles.card)}>
      <LabelLink label={title} className={styles.link}>
        <span className={styles.hidden}>{title}</span>
      </LabelLink>
      <div>
        <Htag tag="h3" className={styles.title}>
          {title}
        </Htag>
      </div>
      <div className={styles.image}>
        <Image layout="fill" className={styles.img} src={image} alt="" />
      </div>
    </div>
  )
}

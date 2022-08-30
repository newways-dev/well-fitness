import clsx from 'clsx'
import Image from 'next/image'
import { CardProps } from './Card.props'
import styles from './Card.module.scss'
import { Htag } from '../Htag/Htag'

export const Card = ({ title, image, className }: CardProps): JSX.Element => {
  return (
    <div className={clsx(className, styles.card)}>
      <div>
        <Htag tag='h3' className={styles.title}>
          {title}
        </Htag>
      </div>
      <div className={styles.image}>
        <Image src={image} alt='' />
      </div>
    </div>
  )
}

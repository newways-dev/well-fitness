import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { BreadCrumbs } from '../BreadCrumbs/BreadCrumbs'
import { Htag } from '../Htag/Htag'
import { Paragraph } from '../Paragraph/Paragraph'
import styles from './Heading.module.scss'

export interface HeadingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string
  location: string
}

export const Heading = ({ title, location }: HeadingProps) => {
  return (
    <div className={styles.heading}>
      <div className={styles.breadCrumbs}>
        <BreadCrumbs location={location} />
      </div>
      <Htag tag="h1" className={styles.title}>
        {title}
      </Htag>
    </div>
  )
}

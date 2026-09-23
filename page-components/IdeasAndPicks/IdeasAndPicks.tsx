import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './IdeasAndPicks.module.scss'
import { Banner, Button } from '../../components'
import { Title as SectionTitle } from '../Title/Title'

export interface IdeasAndPicksProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const IdeasAndPicks = ({}: IdeasAndPicksProps) => {
  return (
    <div className={styles.ideasAndPicks}>
      <div className={styles.wrapper}>
        <SectionTitle className={styles.title} title="Ideas & collections" />
        <div className={styles.cards}>
          <div className={styles.image}>
            <Banner
              tone="red"
              image="/images/stock/fat-burning-elliptical.jpg"
              title="The best machines for"
              highlight="fat burning"
              caption="A full workout in just 14 minutes"
              imagePosition="62% 22%"
              sizes="(max-width: 780px) 100vw, 50vw"
            />
          </div>
          <div className={styles.image}>
            <Banner
              overlay="top"
              image="/images/stock/cardio-strength.jpg"
              title="Cardio-strength training"
              highlight="2 in 1"
              imagePosition="center 70%"
              sizes="(max-width: 780px) 100vw, 25vw"
            />
          </div>
          <div className={styles.image}>
            <Banner
              overlay="top"
              image="/images/stock/marathon-treadmills.jpg"
              title="Treadmills for"
              highlight="marathon training"
              imagePosition="center 60%"
              sizes="(max-width: 780px) 100vw, 25vw"
            />
          </div>
        </div>
        <Button className={styles.button} variant="outlined">
          Full collection
        </Button>
      </div>
    </div>
  )
}

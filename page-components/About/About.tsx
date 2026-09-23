import Image from 'next/image'
import { Button, Title } from '../../components'
import { Title as SectionTitle } from '../Title/Title'
import styles from './About.module.scss'

export const About = () => {
  return (
    <div id="about" className={styles.about}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <SectionTitle title="About us" />
          <div className={styles.text}>
            <Title className={styles.title}>
              A reliable partner since 2005 for hundreds of companies from Lisbon
              to Helsinki.
            </Title>
            <span className={styles.desc}>
              WellFitness is one of the largest importers of
              fitness equipment in Europe, exclusively representing leading
              global manufacturers: Sole Fitness, Optima Fitness,
              Halley, Marcy, SKI Simulator and others.
              <br />
              We offer a wide range of the most modern and high-quality
              products for both home and commercial fitness.
            </span>
          </div>
          <Button variant="outlined">More about the company</Button>
        </div>
        <div className={styles.map}>
          <Image
            src="/images/europe-map.svg"
            alt="Map of Europe with WellFitness partner cities"
            width={1100}
            height={720}
            unoptimized
          />
        </div>
      </div>
    </div>
  )
}

import Image from 'next/image'
import { Button, Title } from '../../components'
import { Title as SectionTitle } from '../Title/Title'
import styles from './About.module.scss'

import map from './images/map.png'

export const About = () => {
  return (
    <div id="about" className={styles.about}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <SectionTitle title="About us" />
          <div className={styles.text}>
            <Title className={styles.title}>
              A reliable partner since 2005 for hundreds of companies from Kaliningrad
              to Vladivostok.
            </Title>
            <span className={styles.desc}>
              Optima Import is one of the largest importers of
              fitness equipment, exclusively representing on the Russian market
              leading global manufacturers: Sole Fitness, Optima Fitness,
              Halley, Marcy, SKI Simulator and others.
              <br />
              We offer a wide range of the most modern and high-quality
              products for both home and commercial fitness.
            </span>
          </div>
          <Button variant="outlined">More about the company</Button>
        </div>
        <div className={styles.map}>
          <Image src={map} alt="" />
        </div>
      </div>
    </div>
  )
}

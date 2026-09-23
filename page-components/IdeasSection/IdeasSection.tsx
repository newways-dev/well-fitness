import { Banner } from '../../components'
import styles from './IdeasSection.module.scss'

export const IdeasSection = () => {
  return (
    <div className={styles.ideasSection}>
      <div className={styles.item}>
        <Banner
          tone="red"
          image="/images/stock/gym-elliptical-woman.jpg"
          title="The best machines for"
          highlight="fat burning"
          caption="A full workout in just 14 minutes"
          imagePosition="65% 18%"
          sizes="(max-width: 900px) 100vw, 50vw"
        />
      </div>
      <div className={styles.item}>
        <Banner
          image="/images/stock/gym-ellipticals.jpg"
          title="Cardio-strength training"
          highlight="2 in 1"
          imagePosition="60% center"
          sizes="(max-width: 900px) 100vw, 50vw"
        />
      </div>
      <div className={styles.item}>
        <Banner
          image="/images/stock/gym-modern-wide.jpg"
          title="Everything your gym needs"
          highlight="in one place"
          imagePosition="center 55%"
          sizes="(max-width: 900px) 100vw, 50vw"
        />
      </div>
      <div className={styles.item}>
        <Banner
          tone="red"
          image="/images/stock/treadmill-room.jpg"
          title="Treadmills for"
          highlight="marathon training"
          imagePosition="65% center"
          sizes="(max-width: 900px) 100vw, 50vw"
        />
      </div>
    </div>
  )
}

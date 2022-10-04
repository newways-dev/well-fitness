import Image from 'next/image'
import { Button, Htag, Icon } from '../../components'
import image from './images/fitness-girl.png'
import Vector from './images/vector.svg'
import styles from './Slider.module.scss'
import { SliderButton } from './SliderButton/SliderButton'

export const Slider = (): JSX.Element => {
  return (
    <div className={styles.slider}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <Htag className={styles.title} tag="h1">
            Zero Runner
          </Htag>
          <p className={styles.description}>
            <span className={styles.bold}>Бег с нулевой ударной нагрузкой</span>{' '}
            на суставы
          </p>
          <Button className={styles.learnMore} variant="outlined">
            Узнать больше
          </Button>
        </div>
        <Image className={styles.image} src={image} alt="image" />
      </div>
      <Vector className={styles.vector} />
      <div className={styles.buttons}>
        <SliderButton />
        <SliderButton className={styles.rightButton} />
      </div>
    </div>
  )
}

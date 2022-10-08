import Image from 'next/image'
import { Button, Title } from '../../components'
import { Title as SectionTitle } from '../Title/Title'
import styles from './About.module.scss'

import map from './images/map.png'

export const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <SectionTitle title="О компании" />
          <div className={styles.text}>
            <Title className={styles.title}>
              Надежный партнер с 2005 года для сотен компаний от Калининграда
              до Владивостока.
            </Title>
            <span className={styles.desc}>
              Оптима Импорт — один из самых крупных импортеров
              фитнес-оборудования, эксклюзивно представляет на российском рынке
              ведущих мировых производителей: Sole Fitness, Optima Fitness,
              Halley, Marcy, SKI Simulator и др.
              <br />
              Мы предлагаем широкий спектр самой современной и качественной
              продукции как для домашнего, так и для коммерческого фитнеса.
            </span>
          </div>
          <Button variant="outlined">Подробнее о компании</Button>
        </div>
        <div className={styles.map}>
          <Image src={map} alt="" />
        </div>
      </div>
    </div>
  )
}

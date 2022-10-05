import Image from 'next/image'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './IdeasAndPicks.module.scss'
import { Button, Title } from '../../components'

import img from './images/ideas-img.png'
import img2 from './images/img2.png'
import img3 from './images/img3.png'
import clock from './images/clock.png'
import company from './images/company.png'

export interface IdeasAndPicksProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const IdeasAndPicks = ({}: IdeasAndPicksProps) => {
  return (
    <div className={styles.ideasAndPicks}>
      <div className={styles.wrapper}>
        <Title className={styles.title}>Идеи и подборки</Title>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.shape}>
              <div className={styles.info}>
                <Title className={styles.cardTitle}>
                  Лучшие тренажеры для
                  <br />
                  <span>жиросжигания</span>
                </Title>
                <div className={styles.time}>
                  <Image src={clock} alt="" />
                  <span className={styles.timeDesc}>
                    Тренировка всего
                    <br />
                    <span>14 минут</span>
                  </span>
                </div>
                <Image src={company} alt="" />
              </div>
            </div>
            <div className={styles.image}>
              <Image className={styles.secondImg} src={img} alt="" />
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.info}>
              <Title className={styles.secondCardTitle}>
                Кардио-силовая <br /> тренировка
              </Title>
              <Title className={styles.secondCardTwoInOne}>2 в 1</Title>
            </div>
            <div className={styles.secondImg}>
              <Image src={img2} alt="" />
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.info}>
              <Title className={styles.thirdCardTitle}>
                Беговая
                <br />
                дорожка
                <br />
                <span>
                  для подготовки
                  <br />
                  к марафону
                </span>
              </Title>
            </div>
            <div className={styles.thirdImg}>
              <Image src={img3} alt="" />
            </div>
          </div>
        </div>
        <Button className={styles.button} variant="outlined">
          Полная подборка
        </Button>
      </div>
    </div>
  )
}

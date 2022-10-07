import Image from 'next/image'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './IdeasAndPicks.module.scss'
import { Button } from '../../components'
import { Title as SectionTitle } from '../Title/Title'

import banner from './images/banner.png'
import banner2 from './images/banner2.png'
import banner3 from './images/banner3.png'

export interface IdeasAndPicksProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const IdeasAndPicks = ({}: IdeasAndPicksProps) => {
  return (
    <div className={styles.ideasAndPicks}>
      <div className={styles.wrapper}>
        <SectionTitle className={styles.title} title="Идеи и подборки" />
        <div className={styles.cards}>
          <div className={styles.image}>
            <Image layout="intrinsic" src={banner} alt="" />
          </div>
          <div className={styles.image}>
            <Image layout="intrinsic" src={banner2} alt="" />
          </div>
          <div className={styles.image}>
            <Image layout="intrinsic" src={banner3} alt="" />
          </div>
        </div>
        <Button className={styles.button} variant="outlined">
          Полная подборка
        </Button>
      </div>
    </div>
  )
}

import Image from 'next/image'
import styles from './IdeasSection.module.scss'

import one from './images/one.png'
import two from './images/two.png'
import three from './images/three.png'
import four from './images/four.png'

export const IdeasSection = () => {
  return (
    <div className={styles.ideasSection}>
      <Image src={one} alt="" />
      <Image src={two} alt="" />
      <Image src={three} alt="" />
      <Image src={four} alt="" />
    </div>
  )
}

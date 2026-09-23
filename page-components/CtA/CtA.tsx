import Image from 'next/image'
import { Button, Title } from '../../components'
import styles from './CtA.module.scss'

import image from './images/ctaImg.png'

export const CtA = () => {
  return (
    <div className={styles.cta}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.image}>
            <Image layout="responsive" src={image} alt="" />
          </div>
        </div>
        <div className={styles.right}>
          <div>
            <Title className={styles.title}>
              Become our partner <span>and get the opportunity</span>{' '}
              to represent our products in your region.
            </Title>
          </div>
          <Button variant="outlined">Become a partner</Button>
        </div>
      </div>
    </div>
  )
}

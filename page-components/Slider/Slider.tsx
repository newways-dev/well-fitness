import { Button } from '../../components'
import styles from './Slider.module.scss'

export const Slider = (): JSX.Element => {
  return (
    <div className={styles.slider}>
      <h1 className={styles.title}>Zero Runner</h1>
      <span className={styles.desc}>
        Бег с нулевой ударной нагрузкой на суставы
      </span>
      <Button variant='outlined'>Узнать больше</Button>
    </div>
  )
}

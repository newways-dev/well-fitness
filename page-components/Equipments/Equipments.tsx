import { EquipmentsProps } from './Equipments.props'
import styles from './Equipments.module.scss'
import { Button, Card, Htag } from '../../components'

import one from './images/one.png'
import two from './images/two.png'
import three from './images/three.png'
import four from './images/four.png'
import five from './images/five.png'
import six from './images/six.png'
import seven from './images/seven.png'
import eight from './images/eight.png'
import nine from './images/nine.png'
import ten from './images/ten.png'

export const Equipments = ({}: EquipmentsProps): JSX.Element => {
  return (
    <div className={styles.equipments}>
      <Htag tag="h2">Тренажеры для дома</Htag>
      <div className={styles.wrapper}>
        <Card className={styles.one} title="Беговые дорожки" image={one} />
        <Card
          className={styles.two}
          title="Эллиптические тренажеры"
          image={two}
        />
        <Card className={styles.three} title="Велотренажеры" image={three} />
        <Card
          className={styles.four}
          title="Горнолыжные тренажеры"
          image={four}
        />
        <Card className={styles.five} title="Силовые тренажеры" image={five} />
        <Card className={styles.six} title="Гребные тренажеры" image={six} />
        <Card className={styles.seven} title="Батуты" image={seven} />
        <Card className={styles.eight} title="Игровые столы" image={eight} />
        <Card className={styles.nine} title="Массажные кресла" image={nine} />
        <Card className={styles.ten} title="Фитнес аксессуары" image={ten} />
      </div>
      <Button className={styles.button} variant="outlined">
        Все категории
      </Button>
    </div>
  )
}

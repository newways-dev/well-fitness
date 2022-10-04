import { FitnessClubsProps } from './FitnessClubs.props'
import { Button, Card, Htag } from '../../components'
import styles from './FitnessClubs.module.scss'

import one from './images/one.png'
import two from './images/two.png'
import three from './images/three.png'
import four from './images/four.png'
import five from './images/five.png'
import six from './images/six.png'
import seven from './images/seven.png'

export const FitnessClubs = ({}: FitnessClubsProps): JSX.Element => {
  return (
    <div className={styles.fitnessClubs}>
      <Htag tag="h2">Для фитнес клубов</Htag>
      <div className={styles.wrapper}>
        <Card
          className={styles.one}
          title="Профессиональные кардиотренажеры"
          image={one}
        />
        <Card
          className={styles.two}
          title="Грузоблочные тренажеры"
          image={two}
        />
        <Card
          className={styles.three}
          title="Тренажеры на свободных весах"
          image={three}
        />
        <Card
          className={styles.four}
          title="Функциональный тренинг"
          image={four}
        />
        <Card
          className={styles.five}
          title="Wellness, СПА, Массаж"
          image={five}
        />
        <Card
          className={styles.six}
          title="Спортивная медицина и реабилитация"
          image={six}
        />
        <Card className={styles.seven} title="Свободные веса" image={seven} />
      </div>
      <Button className={styles.button} variant="outlined">
        Все категории
      </Button>
    </div>
  )
}

import { useRouter } from 'next/router'
import { EquipmentsProps } from './Equipments.props'
import { Title } from '../Title/Title'
import { Button, Card } from '../../components'
import styles from './Equipments.module.scss'

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
  const router = useRouter()

  return (
    <div id="catalog" className={styles.equipments}>
      <Title title="Home equipment" />
      <div className={styles.wrapper}>
        <Card className={styles.one} title="Treadmills" image={one} />
        <Card
          className={styles.two}
          title="Elliptical trainers"
          image={two}
        />
        <Card className={styles.three} title="Exercise bikes" image={three} />
        <Card
          className={styles.four}
          title="Ski trainers"
          image={four}
        />
        <Card className={styles.five} title="Strength machines" image={five} />
        <Card className={styles.six} title="Rowing machines" image={six} />
        <Card className={styles.seven} title="Trampolines" image={seven} />
        <Card className={styles.eight} title="Game tables" image={eight} />
        <Card className={styles.nine} title="Massage chairs" image={nine} />
        <Card className={styles.ten} title="Fitness accessories" image={ten} />
      </div>
      <Button
        className={styles.button}
        variant="outlined"
        onClick={() => router.push('/for-home')}
      >
        All categories
      </Button>
    </div>
  )
}

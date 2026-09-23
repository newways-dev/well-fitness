import { useRouter } from 'next/router'
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
import { Title } from '../Title/Title'

export const FitnessClubs = ({}: FitnessClubsProps): JSX.Element => {
  const router = useRouter()

  return (
    <div className={styles.fitnessClubs}>
      <Title title="For fitness clubs" />
      <div className={styles.wrapper}>
        <Card
          className={styles.one}
          title="Professional cardio equipment"
          image={one}
        />
        <Card
          className={styles.two}
          title="Selectorized machines"
          image={two}
        />
        <Card
          className={styles.three}
          title="Free weight machines"
          image={three}
        />
        <Card
          className={styles.four}
          title="Functional training"
          image={four}
        />
        <Card
          className={styles.five}
          title="Wellness, spa, massage"
          image={five}
        />
        <Card
          className={styles.six}
          title="Sports medicine and rehabilitation"
          image={six}
        />
        <Card className={styles.seven} title="Free weights" image={seven} />
      </div>
      <Button
        className={styles.button}
        variant="outlined"
        onClick={() => router.push('/fitness-clubs')}
      >
        All categories
      </Button>
    </div>
  )
}

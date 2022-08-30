import type { NextPage } from 'next'
import { withLayout } from '../layout/Layout'
import { Equipments, FitnessClubs, Slider } from '../page-components'

const Home: NextPage = () => {
  return (
    <>
      <Slider />
      <Equipments />
      <FitnessClubs />
    </>
  )
}

export default withLayout(Home)

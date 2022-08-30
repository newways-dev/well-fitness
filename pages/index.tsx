import type { NextPage } from 'next'
import { withLayout } from '../layout/Layout'
import { Discount, Equipments, FitnessClubs, Slider } from '../page-components'

const Home: NextPage = () => {
  return (
    <>
      <Slider />
      <Equipments />
      <FitnessClubs />
      <Discount />
    </>
  )
}

export default withLayout(Home)

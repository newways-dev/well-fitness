import type { NextPage } from 'next'
import { withLayout } from '../layout/Layout'
import { Equipments, Slider } from '../page-components'

const Home: NextPage = () => {
  return (
    <>
      <Slider />
      <Equipments />
    </>
  )
}

export default withLayout(Home)

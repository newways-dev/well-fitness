import type { NextPage } from 'next'
import { withLayout } from '../layout/Layout'
import {
  Selections,
  Equipments,
  FitnessClubs,
  IdeasAndPicks,
  Brands,
  Advantages,
  About,
  CtA,
  News,
  Slider,
} from '../page-components'

const Home: NextPage = () => {
  return (
    <>
      <div className="slider">
        <Slider />
      </div>
      <div className="container">
        <Equipments />
        <FitnessClubs />
        <Selections />
      </div>
      <IdeasAndPicks />
      <div className="container">
        <Brands />
        <Advantages />
      </div>
      <About />
      <div className="container">
        <CtA />
        <News />
      </div>
    </>
  )
}

export default withLayout(Home)

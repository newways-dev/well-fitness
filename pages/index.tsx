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
} from '../page-components'

const Home: NextPage = () => {
  return (
    <>
      <div className="wrapper">
        <Equipments />
        <FitnessClubs />
        <Selections />
      </div>
      <IdeasAndPicks />
      <div className="wrapper">
        <Brands />
        <Advantages />
      </div>
      <About />
      <div className="wrapper">
        <CtA />
        <News />
      </div>
    </>
  )
}

export default withLayout(Home)

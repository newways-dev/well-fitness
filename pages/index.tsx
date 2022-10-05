import type { NextPage } from 'next'
import { withLayout } from '../layout/Layout'
import {
  Selections,
  Equipments,
  FitnessClubs,
  IdeasAndPicks,
  Brands,
} from '../page-components'

const Home: NextPage = () => {
  return (
    <>
      <div className="main">
        <Equipments />
        <FitnessClubs />
        <Selections />
      </div>
      <IdeasAndPicks />
      <div className="main">
        <Brands />
      </div>
    </>
  )
}

export default withLayout(Home)

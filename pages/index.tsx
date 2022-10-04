import type { NextPage } from 'next'
import { withLayout } from '../layout/Layout'
import {
  Selections,
  Equipments,
  FitnessClubs,
  IdeasAndPicks,
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
    </>
  )
}

export default withLayout(Home)

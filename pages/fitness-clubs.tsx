import type { NextPage } from 'next'
import { Heading } from '../components'
import { fitnessClubs } from '../helpers/forFitnessClubs'
import { withLayout } from '../layout/Layout'
import { Catalog, IdeasAndPicks, Selections, YouSaw } from '../page-components'

const ForHome: NextPage = () => {
  return (
    <>
      <div className="container">
        <Heading
          title="Equipment for fitness clubs"
          location="Equipment for fitness clubs"
        />
        <Catalog catalog={fitnessClubs} />
      </div>
      <IdeasAndPicks />
      <div className="container">
        <Selections />
        <YouSaw />
      </div>
    </>
  )
}

export default withLayout(ForHome)

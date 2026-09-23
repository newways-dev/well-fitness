import type { NextPage } from 'next'
import { Heading } from '../components'
import { withLayout } from '../layout/Layout'
import { IdeasSection, YouSaw } from '../page-components'

const IdeasAndPicks: NextPage = () => {
  return (
    <>
      <div className="container">
        <Heading title="Ideas & collections" location="Ideas & collections" />
        <IdeasSection />
        <YouSaw />
      </div>
    </>
  )
}

export default withLayout(IdeasAndPicks)

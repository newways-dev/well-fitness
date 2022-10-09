import type { NextPage } from 'next'
import { Heading } from '../components'
import { withLayout } from '../layout/Layout'
import { IdeasSection, YouSaw } from '../page-components'

const IdeasAndPicks: NextPage = () => {
  return (
    <>
      <div className="container">
        <Heading title="Идеи и подборки" location="Идеи и подборки" />
        <IdeasSection />
        <YouSaw />
      </div>
    </>
  )
}

export default withLayout(IdeasAndPicks)

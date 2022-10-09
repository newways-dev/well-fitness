import type { NextPage } from 'next'
import { Heading } from '../components'
import { withLayout } from '../layout/Layout'
import { Catalog, IdeasAndPicks, Selections, YouSaw } from '../page-components'

import { forHomeCatalog } from '../helpers/forHome'

const ForHome: NextPage = () => {
  return (
    <>
      <div className="container">
        <Heading title="Тренажены для дома" location="Тренажеры для дома" />
        <Catalog catalog={forHomeCatalog} />
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

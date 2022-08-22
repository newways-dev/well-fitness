import type { NextPage } from 'next'
import { withLayout } from '../layout/Layout'
import { Slider } from '../page-components'

const Home: NextPage = () => {
  return (
    <>
      <Slider />
    </>
  )
}

export default withLayout(Home)

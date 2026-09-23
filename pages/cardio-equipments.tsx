import type { NextPage } from 'next'
import { Heading } from '../components'
import { withLayout } from '../layout/Layout'
import { CardioEquipments } from '../page-components'

const CardioEquipmentsPage: NextPage = () => {
  return (
    <>
      <div className="container">
        <Heading
          title="Cardio equipment"
          location="For fitness clubs > Cardio equipment"
        />
        <CardioEquipments />
      </div>
    </>
  )
}

export default withLayout(CardioEquipmentsPage)

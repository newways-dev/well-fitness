import type { NextPage } from 'next'
import { Heading } from '../components'
import { withLayout } from '../layout/Layout'
import { CardioEquipments } from '../page-components'

const CardioEquipmentsPage: NextPage = () => {
  return (
    <>
      <div className="container">
        <Heading
          title="Кардиотренажеры"
          location="Для фитнес клубов > Кардиотренажеры"
        />
        <CardioEquipments />
      </div>
    </>
  )
}

export default withLayout(CardioEquipmentsPage)

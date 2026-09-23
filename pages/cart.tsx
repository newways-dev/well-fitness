import type { NextPage } from 'next'
import { Heading } from '../components'
import { withLayout } from '../layout/Layout'
import { Cart } from '../page-components'

const CartPage: NextPage = () => {
  return (
    <div className="container">
      <Heading title="Корзина" location="Корзина" />
      <Cart />
    </div>
  )
}

export default withLayout(CartPage)

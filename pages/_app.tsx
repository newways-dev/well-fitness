import type { AppProps } from 'next/app'
import '../styles/globals.scss'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { CartProvider } from '../context/CartContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}

export default MyApp

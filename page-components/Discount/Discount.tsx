import { Badge, Button, ProductCard } from '../../components'
import styles from './Discount.module.scss'

import image from '../../public/images/one.png'
import { SliderButton } from '../Slider/SliderButton/SliderButton'

export const Discount = (): JSX.Element => {
  return (
    <div className={styles.discount}>
      <div className={styles.wrapper}>
        <ProductCard
          badges={['new', 'like', 'percentage']}
          icons
          image={image}
          inStock={2}
          title='Беговая дорожка CardioPower S35'
          rating={5}
          price='1 134 900'
          oldPrice='1 154 900'
          button
        />
        <ProductCard
          badges={['new', 'like', 'percentage']}
          icons
          image={image}
          inStock={1}
          title='Беговая дорожка CardioPower S35'
          rating={5}
          price='1 134 900'
          oldPrice='1 154 900'
          button
        />
        <ProductCard
          badges={['new', 'like', 'percentage']}
          icons
          image={image}
          inStock={0}
          title='Беговая дорожка CardioPower S35'
          rating={5}
          price='1 134 900'
          oldPrice='1 154 900'
          button
        />
        <ProductCard
          badges={['new', 'like', 'percentage']}
          icons
          image={image}
          inStock={-1}
          title='Беговая дорожка CardioPower S35'
          rating={5}
          price='1 134 900'
          oldPrice='1 154 900'
          button
        />
      </div>
      <SliderButton className={styles.sliderButton} />
      <Button className={styles.button} variant='outlined'>
        Все товары по акции
      </Button>
    </div>
  )
}

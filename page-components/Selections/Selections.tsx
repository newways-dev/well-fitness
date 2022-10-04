import { Badge, Button, ProductCard, Tabs } from '../../components'
import { SliderButton } from '../Slider/SliderButton/SliderButton'
import { discountProducts } from '../../helpers/discountProducts'
import styles from './Selections.module.scss'

import image from './images/CardioPower S35.png'

export const Selections = (): JSX.Element => {
  const buttons = ['Акция', 'Новинки', 'Мы рекомендуем']

  return (
    <div className={styles.selections}>
      <Tabs buttons={buttons} />
      <div className={styles.wrapper}>
        {discountProducts.map((product, index) => (
          <ProductCard
            key={index}
            className={styles.productCard}
            badges={product.badges}
            icons={product.icons}
            image={image}
            inStock={product.inStock}
            title={product.title}
            rating={product.rating}
            price={product.price}
            oldPrice={product.oldPrice}
            button={product.button}
            imgW={200}
            imgH={300}
          />
        ))}
      </div>
      <SliderButton className={styles.sliderButton} />
      <Button className={styles.button} variant="outlined">
        Все товары по акции
      </Button>
    </div>
  )
}

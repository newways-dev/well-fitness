import Image from 'next/image'
import styles from './CardioEquipments.module.scss'

import banner from './banner.png'
import image from './CardioEquipmentsB37.png'
import { Categories, Filters, ProductCard, Sort } from '../../components'
import { cardioEquipments } from '../../helpers/cardioEquipments'

const categories = [
  'Беговые дорожки',
  'Эллиптические',
  'Велотренажеры',
  'Cтепперы',
  'Горнолыжные',
  'Гребные тренажеры',
]

const filtersTypes = {
  producer: [
    'Gym80',
    'CardioPower',
    'Original Fitness',
    'Nautilus',
    'Sole Fitness',
    'True Fitness',
    'Smith Strength',
  ],
  functionality: ['Самые продвинутые', 'Компактные', 'С моб. приложением'],
  discount: ['Акция', 'Новинки', 'В наличии', 'Наш выбор'],
}

export const CardioEquipments = () => {
  return (
    <div className={styles.cardioEquipments}>
      <div className={styles.wrapper}>
        <Image src={banner} alt="" />
        <div className={styles.sort}>
          <Categories categories={categories} />
          <Sort />
        </div>
        <div className={styles.productsWrapper}>
          <div className={styles.products}>
            {cardioEquipments.map((product, index) => (
              <ProductCard
                className={styles.productCard}
                characteristics={product.characteristics}
                title={product.title}
                rating={product.rating}
                price={product.price}
                image={image}
                oldPrice={product.oldPrice}
                inStock={product.inStock}
                button={true}
                key={index}
              />
            ))}
          </div>
          <div className={styles.filters}>
            <Filters title="Производители" types={filtersTypes.producer} />
            <Filters
              title="Функциональность"
              types={filtersTypes.functionality}
            />
            <Filters title="Акция, наличие" types={filtersTypes.discount} />
          </div>
        </div>
      </div>
    </div>
  )
}

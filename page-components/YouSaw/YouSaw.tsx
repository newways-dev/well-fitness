import { ProductCard } from '../../components'
import { youSaw } from '../../helpers/youSaw'
import styles from './YouSaw.module.scss'

import image from './images/CardioPower S35.png'
import { Title } from '../Title/Title'

export const YouSaw = () => {
  return (
    <div className={styles.youSaw}>
      <Title title="Вы смотрели" />
      <div className={styles.wrapper}>
        {youSaw.map((product, index) => (
          <ProductCard
            key={index}
            className={styles.youSawCard}
            image={image}
            title={product.title}
            price={product.price}
            rating={product.rating}
            imgFill={true}
          />
        ))}
      </div>
    </div>
  )
}

import Image from 'next/image'
import { ProductCardProps } from './ProductCard.props'
import styles from './ProductCard.module.scss'
import { Badge } from '../Badge/Badge'
import { Icon } from '../Icon/Icon'
import { Htag } from '../Htag/Htag'
import { InStock } from '../InStock/InStock'
import { Rating } from '../Rating/Rating'
import { Button } from '../Button/Button'

export const ProductCard = ({
  badges,
  icons,
  image,
  inStock,
  title,
  rating,
  price,
  oldPrice,
  button,
}: ProductCardProps): JSX.Element => {
  badges && badges.map((i) => console.log(i))

  return (
    <article className={styles.productCard}>
      <div className={styles.top}>
        {badges && (
          <div className={styles.badges}>
            {badges.map((badge) => (
              <Badge className={styles.badge} key={badge} type={badge} />
            ))}
          </div>
        )}
        {icons && (
          <div className={styles.icons}>
            <Icon className={styles.icon} name='compare' />
            <Icon className={styles.icon} name='favorites' />
          </div>
        )}
      </div>
      <Image src={image} alt='' />
      {inStock && <InStock value={inStock} />}
      <Htag className={styles.title} tag='h3'>
        {title}
      </Htag>
      <Rating />
      <div className={styles.info}>
        <div className={styles.priceContainer}>
          <span className={styles.price}>{price}</span>
          {oldPrice && <span className={styles.oldPrice}>{oldPrice}</span>}
        </div>
        {button && (
          <Button className={styles.button} variant='primary'>
            <Icon name='cart' /> Купить
          </Button>
        )}
      </div>
    </article>
  )
}

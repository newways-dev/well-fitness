import Image from 'next/image'
import { ProductCardProps } from './ProductCard.props'
import styles from './ProductCard.module.scss'
import { Badge } from '../Badge/Badge'
import { Icon } from '../Icon/Icon'
import { Htag } from '../Htag/Htag'
import { InStock } from '../InStock/InStock'
import { Rating } from '../Rating/Rating'
import { Button } from '../Button/Button'
import clsx from 'clsx'
import useWindowSize from '../../hooks/useWindowSize'
import { Paragraph } from '../Paragraph/Paragraph'

export const ProductCard = ({
  badges,
  icons,
  image,
  inStock,
  title,
  price,
  oldPrice,
  button,
  className,
  characteristics,
}: ProductCardProps): JSX.Element => {
  const width = useWindowSize()

  return (
    <article className={clsx(styles.productCard, className)}>
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
            <Icon className={styles.icon} name="compare" />
            <Icon className={styles.icon} name="favorites" />
          </div>
        )}
      </div>
      <Image src={image} alt="" />
      <InStock className={styles.stock} value={inStock} />
      <Htag className={styles.title} tag="h3">
        {title}
      </Htag>
      {characteristics &&
        characteristics.map((item, index) => (
          <div className={styles.characteristics} key={index}>
            <div className={styles.characteristic}>
              <Paragraph className={styles.characteristicTitle}>
                {item.title}
              </Paragraph>
              <Paragraph className={styles.characteristicDescription}>
                {item.description}
              </Paragraph>
            </div>
          </div>
        ))}
      <Rating className={styles.rating} />
      <div className={styles.info}>
        <div className={styles.priceContainer}>
          <span className={styles.price}>{price}</span>
          {oldPrice && <span className={styles.oldPrice}>{oldPrice}</span>}
        </div>
        {button && width && width > 720 && (
          <Button className={styles.button} variant="primary">
            <Icon name="cart" /> Купить
          </Button>
        )}
      </div>
    </article>
  )
}

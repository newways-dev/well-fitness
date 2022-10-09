import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Button, ProductCard, Tabs } from '../../components'
import { SliderButton } from '../Slider/SliderButton/SliderButton'
import { discount } from '../../helpers/discountProducts'

import styles from './Selections.module.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import image from './images/CardioPower S35.png'
import Slider from 'react-slick'
import useWindowSize from '../../hooks/useWindowSize'

interface NextButtonProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  onClick?: () => void
}

function NextButton({ onClick }: NextButtonProps) {
  return <SliderButton onClick={onClick} className={styles.sliderButton} />
}

export const Selections = (): JSX.Element => {
  const buttons = ['Акция', 'Новинки', 'Мы рекомендуем']
  const width = useWindowSize()

  const onClick = () => {}
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow:
      width && width < 1340
        ? 3
        : width && width < 820
        ? 2
        : width && width < 450
        ? 1
        : 4,
    slidesToScroll: width && width < 450 ? 4 : 1,
    prevArrow: <></>,
    nextArrow: <NextButton onClick={onClick} />,
  }

  return (
    <div className={styles.selectionsContainer}>
      <div className={styles.selections}>
        <Tabs className={styles.tabs} buttons={buttons} />
        <div className={styles.wrapper}>
          <Slider className={styles.slider} {...settings}>
            {discount.map((product, index) => (
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
          </Slider>
        </div>
      </div>
    </div>
  )
}

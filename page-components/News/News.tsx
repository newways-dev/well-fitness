import Image from 'next/image'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import Slider from 'react-slick'
import { Button, Card, Tabs, Title } from '../../components'
import { news } from '../../helpers/news'
import useWindowSize from '../../hooks/useWindowSize'
import { SliderButton } from '../Slider/SliderButton/SliderButton'
import styles from './News.module.scss'

interface NextButtonProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  onClick?: () => void
}

function NextButton({ onClick }: NextButtonProps) {
  return <SliderButton onClick={onClick} className={styles.sliderButton} />
}

export const News = () => {
  const width = useWindowSize()
  const buttons = ['Новости', 'Блог']

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
    slidesToScroll: width && width < 450 ? 2 : 1,
    prevArrow: <></>,
    nextArrow: <NextButton onClick={onClick} />,
  }

  return (
    <div className={styles.newsContainer}>
      <div className={styles.news}>
        <Tabs buttons={buttons} />
        <div className={styles.wrapper}>
          <div className={styles.newsItems}>
            <Slider className={styles.slider} {...settings}>
              {news.map((newsItem, index) => (
                <div key={index} className={styles.newsItem}>
                  <div className={styles.image}>
                    <Image
                      width={300}
                      height={300}
                      src={newsItem.image}
                      alt=""
                    />
                  </div>
                  <Title className={styles.title}>{newsItem.title}</Title>
                  <span className={styles.desc}>{newsItem.desc}</span>
                  <span className={styles.date}>{newsItem.date}</span>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

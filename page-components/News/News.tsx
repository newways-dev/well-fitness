import Image from 'next/image'
import { Button, Tabs, Title } from '../../components'
import { news } from '../../helpers/news'
import styles from './News.module.scss'

export const News = () => {
  const buttons = ['Новости', 'Блог']
  return (
    <div className={styles.news}>
      <div className={styles.wrapper}>
        <Tabs buttons={buttons} />
        <div className={styles.newsContainer}>
          {news.map((newsItem, index) => (
            <div key={index} className={styles.newsItem}>
              <div className={styles.image}>
                <Image layout="fill" src={newsItem.image} alt="" />
              </div>
              <Title className={styles.title}>{newsItem.title}</Title>
              <span className={styles.desc}>{newsItem.desc}</span>
              <span className={styles.date}>{newsItem.date}</span>
            </div>
          ))}
        </div>
        <Button variant="outlined">Все новости</Button>
      </div>
    </div>
  )
}

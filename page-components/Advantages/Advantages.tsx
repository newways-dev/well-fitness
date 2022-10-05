import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Icon, Paragraph, Title } from '../../components'
import styles from './Advantages.module.scss'

const advantages = [
  {
    icon: <Icon name="help" />,
    title: 'Помощь покупателю',
    desc: 'Узнайте как приобрести товар, способы доставки и оплаты, а также условия гарантии.',
    link: 'Подробнее',
  },
  {
    icon: <Icon name="callSerice" />,
    title: 'Заявка на сервис',
    desc: 'Оставьте заявку на проведение гарантийного и постгарантийного ремонта.',
    link: 'Оставить заявку ',
  },
  {
    icon: <Icon name="personal" />,
    title: 'Личный кабинет партнера B2B',
    desc: 'Личный кабинет дилера с доступом к информационным материалам',
    link: 'Стать партнером',
  },
  {
    icon: <Icon name="hall" />,
    title: 'Выставочный зал',
    desc: 'Оставьте заявку на посещение шоу-рума в Москве',
    link: 'Записаться',
  },
]

export interface LinkProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  link: string
}

const Link = ({ link }: LinkProps) => {
  return (
    <span className={styles.link}>
      {link}
      <Icon className={styles.arrow} name="arrow" />
    </span>
  )
}

export const Advantages = () => {
  return (
    <div className={styles.advantages}>
      <div className={styles.wrapper}>
        {advantages.map((advantage, index) => (
          <div className={styles.advantage} key={index}>
            <div className={styles.icon}>{advantage.icon}</div>
            <Title className={styles.title}>{advantage.title}</Title>
            <Paragraph className={styles.desc}>{advantage.desc}</Paragraph>
            <Link link={advantage.link} />
          </div>
        ))}
      </div>
    </div>
  )
}

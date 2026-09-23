import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { Icon, Paragraph, Title } from '../../components'
import styles from './Advantages.module.scss'

const advantages = [
  {
    icon: <Icon name="help" />,
    title: 'Customer help',
    desc: 'Learn how to buy, delivery and payment options, and warranty terms.',
    link: 'Learn more',
  },
  {
    icon: <Icon name="callSerice" />,
    title: 'Service request',
    desc: 'Submit a request for warranty and post-warranty repairs.',
    link: 'Submit a request ',
  },
  {
    icon: <Icon name="personal" />,
    title: 'B2B partner account',
    desc: 'Dealer account with access to informational materials',
    link: 'Become a partner',
  },
  {
    icon: <Icon name="hall" />,
    title: 'Showroom',
    desc: 'Request a visit to our showroom in Berlin',
    link: 'Book a visit',
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

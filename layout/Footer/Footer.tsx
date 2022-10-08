import { FooterProps } from './Footer.props'
import { Dillers, Icon, Input, Title } from '../../components'
import Logo from './logo.svg'

import styles from './Footer.module.scss'

import { about, catalog, help, services } from '../../helpers/footer'

export const Footer = ({}: FooterProps) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <div className={styles.links}>
            <ul className={styles.linksColumn}>
              <Title className={styles.title}>{catalog[0].title}</Title>
              {catalog[0].links.map((link) => (
                <li className={styles.link} key={link}>
                  {link}
                </li>
              ))}
            </ul>
            <ul className={styles.linksColumn}>
              <Title className={styles.title}>{help[0].title}</Title>
              {help[0].links.map((link) => (
                <li className={styles.link} key={link}>
                  {link}
                </li>
              ))}
            </ul>
            <ul className={styles.linksColumn}>
              <Title className={styles.title}>{services[0].title}</Title>
              {services[0].links.map((link) => (
                <li className={styles.link} key={link}>
                  {link}
                </li>
              ))}
            </ul>
            <ul className={styles.linksColumn}>
              <Title className={styles.title}>{about[0].title}</Title>
              {about[0].links.map((link) => (
                <li className={styles.link} key={link}>
                  {link}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.contacts}>
            <div className={styles.subscribe}>
              <Input placeholder="Подписаться на рассылку" />
              <Icon name="send" />
            </div>
            <div className={styles.contactsInfo}>
              <div className={styles.numbers}>
                <span className={styles.number}>
                  +7 (000) 000-00-00 для Москвы
                </span>
                <span className={styles.number}>
                  +8 (800) 000-00-00 для России
                </span>
                <span className={styles.makeCall}>Заказать звонок</span>
              </div>
              <div className={styles.emailSection}>
                <span className={styles.email}>wellfitness@wellfit.ru</span>
                <span className={styles.write}>Написать</span>
              </div>
              <div className={styles.politics}>
                <span className={styles.politicsLink}>
                  Политика конфиденциальности
                </span>
                <span className={styles.politicsLink}>Публичная офферта</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.addition}>
          <div className={styles.logo}>
            <Logo />
            <span className={styles.rights}>
              © WellFitness. 2022 Все права защищены
            </span>
          </div>
          <div className={styles.additionContainer}>
            <div className={styles.additionLinks}>
              <div className={styles.social}>
                <Icon name="inst" />
                <Icon name="facebook" />
                <Icon name="youtube" />
              </div>
              <Dillers />
            </div>
            <div className={styles.payment}>
              <Icon name="visa" />
              <Icon name="mastercard" />
              <Icon name="webmoney" />
              <Icon name="paypal" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

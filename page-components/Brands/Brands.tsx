import Image from 'next/image'
import { Button } from '../../components'
import { Title } from '../Title/Title'
import styles from './Brands.module.scss'
import { brands } from './images'

export const Brands = () => {
  const categories = [
    'Treadmills',
    'Elliptical trainers',
    'Exercise bikes',
    'Strength machines',
    'Trampolines',
    'Game tables',
  ]

  return (
    <div id="brands" className={styles.brands}>
      <div className={styles.wrapper}>
        <Title title="Popular brands" />
        <div className={styles.categories}>
          {categories.map((categorie) => (
            <span className={styles.categorie} key={categorie}>
              {categorie}
            </span>
          ))}
        </div>
        <div className={styles.companies}>
          {brands.map((brand, index) => (
            <div className={styles.companie} key={index}>
              <Image src={brand} alt="" />
            </div>
          ))}
        </div>
        <Button variant="outlined">All brands</Button>
      </div>
    </div>
  )
}

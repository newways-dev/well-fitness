import { CatalogCard } from '../../components'
import styles from './Catalog.module.scss'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

type ListType = {
  title: string
  quantity: number
}

type CatalogProductType = {
  image: string
  title: string
  list: ListType[]
}

interface CatalogProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  catalog: CatalogProductType[]
}

export const Catalog = ({ catalog }: CatalogProps) => {
  return (
    <div className={styles.catalog}>
      {catalog.map((item, index) => (
        <CatalogCard
          key={index}
          className={styles.catalogCard}
          image={item.image}
          title={item.title}
          list={item.list}
        />
      ))}
    </div>
  )
}

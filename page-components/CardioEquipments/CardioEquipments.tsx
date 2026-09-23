import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useState } from 'react'
import styles from './CardioEquipments.module.scss'

import banner from './banner.png'
import image from './CardioEquipmentsB37.png'
import {
  Button,
  Categories,
  Filters,
  ProductCard,
  Sort,
} from '../../components'
import {
  cardioEquipments,
  categories,
  filtersTypes,
} from '../../helpers/cardioEquipments'
import {
  ActiveFilters,
  FilterGroup,
  SortKey,
  countActiveFilters,
  emptyFilters,
  filterProducts,
  formatPrice,
  pluralizeProducts,
  sortProducts,
  toggleFilter,
} from '../../lib/catalog'
import { parseCategoryIndex } from '../../lib/routes'
import { useCart } from '../../context/CartContext'

const sortOptions: { key: SortKey; label: string }[] = [
  { key: 'popularity', label: 'Most popular' },
  { key: 'novelty', label: 'Newest' },
  { key: 'price', label: 'Price' },
  { key: 'rating', label: 'Top rated' },
]

export const CardioEquipments = () => {
  const router = useRouter()
  const { add, quantityOf } = useCart()
  const [activeCategory, setActiveCategory] = useState(0)

  useEffect(() => {
    if (router.isReady) {
      setActiveCategory(
        parseCategoryIndex(router.query.category, categories.length),
      )
    }
  }, [router.isReady, router.query.category])
  const [sortKey, setSortKey] = useState<SortKey>('popularity')
  const [filters, setFilters] = useState<ActiveFilters>(emptyFilters)

  const products = useMemo(
    () =>
      sortProducts(
        filterProducts(cardioEquipments, filters, categories[activeCategory]),
        sortKey,
      ),
    [activeCategory, filters, sortKey],
  )

  const activeFiltersCount = countActiveFilters(filters)

  const handleToggle = (group: FilterGroup) => (value: string) =>
    setFilters((current) => toggleFilter(current, group, value))

  return (
    <div className={styles.cardioEquipments}>
      <div className={styles.wrapper}>
        <Image src={banner} alt="" />
        <div className={styles.sort}>
          <Categories
            categories={categories}
            active={activeCategory}
            onChange={setActiveCategory}
          />
          <Sort options={sortOptions} value={sortKey} onChange={setSortKey} />
        </div>
        <div className={styles.summary} aria-live="polite">
          {pluralizeProducts(products.length)}
        </div>
        <div className={styles.productsWrapper}>
          <div className={styles.products}>
            {products.map((product) => (
              <ProductCard
                className={styles.productCard}
                badges={product.badges}
                icons={true}
                characteristics={product.characteristics}
                title={product.title}
                rating={product.rating}
                price={`${formatPrice(product.price)} ₽`}
                image={image}
                oldPrice={
                  product.oldPrice
                    ? `${formatPrice(product.oldPrice)} ₽`
                    : undefined
                }
                inStock={product.inStock}
                button={true}
                onBuy={() => add(product.id)}
                cartQuantity={quantityOf(product.id)}
                key={product.id}
              />
            ))}
            {products.length === 0 && (
              <div className={styles.empty}>
                <p className={styles.emptyTitle}>
                  No products match the selected filters
                </p>
                <Button variant="outlined" onClick={() => setFilters(emptyFilters)}>
                  Reset filters
                </Button>
              </div>
            )}
          </div>
          <div className={styles.filters}>
            <Filters
              title="Manufacturers"
              types={filtersTypes.producer}
              selected={filters.producer}
              onToggle={handleToggle('producer')}
            />
            <Filters
              title="Features"
              types={filtersTypes.functionality}
              selected={filters.functionality}
              onToggle={handleToggle('functionality')}
            />
            <Filters
              title="Deals & availability"
              types={filtersTypes.discount}
              selected={filters.discount}
              onToggle={handleToggle('discount')}
            />
            {activeFiltersCount > 0 && (
              <button
                type="button"
                className={styles.reset}
                onClick={() => setFilters(emptyFilters)}
              >
                Reset filters ({activeFiltersCount})
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

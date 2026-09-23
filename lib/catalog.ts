import { InStockEnum } from '../components/ProductCard/ProductCard.props'

export type Characteristic = {
  title: string
  description: string
}

export type Product = {
  id: number
  category: string
  producer: string
  title: string
  price: number
  oldPrice?: number
  rating: number
  popularity: number
  addedAt: string
  inStock: InStockEnum
  isNew: boolean
  isChoice: boolean
  functionality: string[]
  badges: string[]
  characteristics: Characteristic[]
}

export type SortKey = 'popularity' | 'novelty' | 'price' | 'rating'

export type FilterGroup = 'producer' | 'functionality' | 'discount'

export type ActiveFilters = Record<FilterGroup, string[]>

export const emptyFilters: ActiveFilters = {
  producer: [],
  functionality: [],
  discount: [],
}

const discountMatchers: Record<string, (product: Product) => boolean> = {
  Sale: (product) => product.oldPrice !== undefined,
  'New arrivals': (product) => product.isNew,
  'In stock': (product) =>
    product.inStock === InStockEnum.inStock ||
    product.inStock === InStockEnum.littleLeft,
  'Our pick': (product) => product.isChoice,
}

const groupMatchers: Record<
  FilterGroup,
  (product: Product, value: string) => boolean
> = {
  producer: (product, value) => product.producer === value,
  functionality: (product, value) => product.functionality.includes(value),
  discount: (product, value) => {
    const matcher = discountMatchers[value]
    return matcher ? matcher(product) : false
  },
}

const filterGroups = Object.keys(emptyFilters) as FilterGroup[]

export function filterProducts(
  products: Product[],
  filters: ActiveFilters,
  category?: string,
): Product[] {
  return products.filter((product) => {
    if (category !== undefined && product.category !== category) {
      return false
    }

    return filterGroups.every((group) => {
      const selected = filters[group]
      return (
        selected.length === 0 ||
        selected.some((value) => groupMatchers[group](product, value))
      )
    })
  })
}

const comparators: Record<SortKey, (a: Product, b: Product) => number> = {
  popularity: (a, b) => b.popularity - a.popularity,
  novelty: (a, b) => b.addedAt.localeCompare(a.addedAt),
  price: (a, b) => a.price - b.price,
  rating: (a, b) => b.rating - a.rating,
}

export function sortProducts(products: Product[], key: SortKey): Product[] {
  return [...products].sort(comparators[key])
}

export function toggleFilter(
  filters: ActiveFilters,
  group: FilterGroup,
  value: string,
): ActiveFilters {
  const current = filters[group]
  const next = current.includes(value)
    ? current.filter((item) => item !== value)
    : [...current, value]

  return { ...filters, [group]: next }
}

export function countActiveFilters(filters: ActiveFilters): number {
  return filterGroups.reduce((sum, group) => sum + filters[group].length, 0)
}

export function formatPrice(value: number): string {
  return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}

export function pluralizeProducts(count: number): string {
  return `${count} ${count === 1 ? 'product' : 'products'}`
}

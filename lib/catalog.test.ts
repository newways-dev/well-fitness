import { describe, expect, it } from 'vitest'
import { InStockEnum } from '../components/ProductCard/ProductCard.props'
import {
  countActiveFilters,
  emptyFilters,
  filterProducts,
  formatPrice,
  pluralizeProducts,
  sortProducts,
  toggleFilter,
  type Product,
} from './catalog'

const make = (overrides: Partial<Product>): Product => ({
  id: 1,
  category: 'Treadmills',
  producer: 'CardioPower',
  title: 'Item',
  price: 1000,
  rating: 3,
  popularity: 10,
  addedAt: '2026-01-01',
  inStock: InStockEnum.inStock,
  isNew: false,
  isChoice: false,
  functionality: [],
  badges: [],
  characteristics: [],
  ...overrides,
})

const products: Product[] = [
  make({
    id: 1,
    price: 300,
    rating: 5,
    popularity: 10,
    addedAt: '2026-01-01',
    oldPrice: 400,
    functionality: ['Compact'],
  }),
  make({
    id: 2,
    producer: 'Nautilus',
    price: 100,
    rating: 3,
    popularity: 90,
    addedAt: '2026-03-01',
    isNew: true,
    inStock: InStockEnum.notInStock,
  }),
  make({
    id: 3,
    category: 'Elliptical trainers',
    producer: 'Nautilus',
    price: 200,
    rating: 4,
    popularity: 50,
    addedAt: '2026-02-01',
    isChoice: true,
    inStock: InStockEnum.littleLeft,
    functionality: ['Compact', 'With mobile app'],
  }),
]

const ids = (list: Product[]) => list.map((product) => product.id)

describe('filterProducts', () => {
  it('returns everything when no filters or category are set', () => {
    expect(ids(filterProducts(products, emptyFilters))).toEqual([1, 2, 3])
  })

  it('filters by category', () => {
    expect(
      ids(filterProducts(products, emptyFilters, 'Elliptical trainers')),
    ).toEqual([3])
  })

  it('matches any value inside a single filter group', () => {
    const filters = { ...emptyFilters, producer: ['CardioPower', 'Nautilus'] }
    expect(ids(filterProducts(products, filters))).toEqual([1, 2, 3])
  })

  it('requires a match in every group that has a selection', () => {
    const filters = {
      ...emptyFilters,
      producer: ['Nautilus'],
      functionality: ['Compact'],
    }
    expect(ids(filterProducts(products, filters))).toEqual([3])
  })

  it('applies discount filters', () => {
    expect(
      ids(filterProducts(products, { ...emptyFilters, discount: ['Sale'] })),
    ).toEqual([1])
    expect(
      ids(filterProducts(products, { ...emptyFilters, discount: ['New arrivals'] })),
    ).toEqual([2])
    expect(
      ids(
        filterProducts(products, { ...emptyFilters, discount: ['Our pick'] }),
      ),
    ).toEqual([3])
  })

  it('treats "in stock" as available or little left, not out of stock', () => {
    expect(
      ids(
        filterProducts(products, { ...emptyFilters, discount: ['In stock'] }),
      ),
    ).toEqual([1, 3])
  })

  it('ignores unknown discount values', () => {
    expect(
      ids(filterProducts(products, { ...emptyFilters, discount: ['???'] })),
    ).toEqual([])
  })

  it('returns an empty list when nothing matches', () => {
    const filters = { ...emptyFilters, producer: ['Gym80'] }
    expect(filterProducts(products, filters)).toEqual([])
  })
})

describe('sortProducts', () => {
  it('sorts by popularity descending', () => {
    expect(ids(sortProducts(products, 'popularity'))).toEqual([2, 3, 1])
  })

  it('sorts by novelty, newest first', () => {
    expect(ids(sortProducts(products, 'novelty'))).toEqual([2, 3, 1])
  })

  it('sorts by price ascending', () => {
    expect(ids(sortProducts(products, 'price'))).toEqual([2, 3, 1])
  })

  it('sorts by rating descending', () => {
    expect(ids(sortProducts(products, 'rating'))).toEqual([1, 3, 2])
  })

  it('does not mutate the input array', () => {
    const copy = [...products]
    sortProducts(products, 'price')
    expect(products).toEqual(copy)
  })
})

describe('toggleFilter', () => {
  it('adds a value that is not selected', () => {
    const next = toggleFilter(emptyFilters, 'producer', 'Gym80')
    expect(next.producer).toEqual(['Gym80'])
  })

  it('removes a value that is already selected', () => {
    const start = { ...emptyFilters, producer: ['Gym80', 'Nautilus'] }
    expect(toggleFilter(start, 'producer', 'Gym80').producer).toEqual([
      'Nautilus',
    ])
  })

  it('does not mutate the previous state', () => {
    toggleFilter(emptyFilters, 'discount', 'Sale')
    expect(emptyFilters.discount).toEqual([])
  })
})

describe('countActiveFilters', () => {
  it('sums selections across groups', () => {
    expect(
      countActiveFilters({
        producer: ['a', 'b'],
        functionality: ['c'],
        discount: [],
      }),
    ).toBe(3)
  })
})

describe('formatPrice', () => {
  it('groups thousands with spaces', () => {
    expect(formatPrice(999)).toBe('999')
    expect(formatPrice(34900)).toBe('34 900')
    expect(formatPrice(1134900)).toBe('1 134 900')
  })
})

describe('pluralizeProducts', () => {
  it('uses singular only for exactly one product', () => {
    expect(pluralizeProducts(0)).toBe('0 products')
    expect(pluralizeProducts(1)).toBe('1 product')
    expect(pluralizeProducts(2)).toBe('2 products')
    expect(pluralizeProducts(21)).toBe('21 products')
  })
})

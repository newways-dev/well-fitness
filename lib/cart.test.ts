import { describe, expect, it } from 'vitest'
import { InStockEnum } from '../components/ProductCard/ProductCard.props'
import {
  MAX_QUANTITY,
  addLine,
  countItems,
  parseStoredCart,
  removeLine,
  resolveLines,
  serializeCart,
  setLineQuantity,
  totalPrice,
} from './cart'
import type { Product } from './catalog'

const make = (id: number, price: number): Product => ({
  id,
  category: 'Беговые дорожки',
  producer: 'CardioPower',
  title: `Item ${id}`,
  price,
  rating: 5,
  popularity: 1,
  addedAt: '2026-01-01',
  inStock: InStockEnum.inStock,
  isNew: false,
  isChoice: false,
  functionality: [],
  badges: [],
  characteristics: [],
})

describe('addLine', () => {
  it('adds a new line', () => {
    expect(addLine([], 1)).toEqual([{ id: 1, quantity: 1 }])
  })

  it('increments an existing line', () => {
    expect(addLine([{ id: 1, quantity: 2 }], 1)).toEqual([
      { id: 1, quantity: 3 },
    ])
  })

  it('caps quantity at the maximum', () => {
    expect(addLine([{ id: 1, quantity: MAX_QUANTITY }], 1)).toEqual([
      { id: 1, quantity: MAX_QUANTITY },
    ])
  })

  it('ignores non-positive quantities for new lines', () => {
    expect(addLine([], 1, 0)).toEqual([])
    expect(addLine([], 1, -3)).toEqual([])
  })

  it('does not mutate the input', () => {
    const lines = [{ id: 1, quantity: 1 }]
    addLine(lines, 1)
    expect(lines).toEqual([{ id: 1, quantity: 1 }])
  })
})

describe('setLineQuantity', () => {
  const lines = [
    { id: 1, quantity: 2 },
    { id: 2, quantity: 1 },
  ]

  it('updates the quantity of one line', () => {
    expect(setLineQuantity(lines, 2, 5)).toEqual([
      { id: 1, quantity: 2 },
      { id: 2, quantity: 5 },
    ])
  })

  it('removes the line when quantity drops to zero', () => {
    expect(setLineQuantity(lines, 1, 0)).toEqual([{ id: 2, quantity: 1 }])
  })

  it('clamps to the maximum and floors decimals', () => {
    expect(setLineQuantity(lines, 1, 1000)[0].quantity).toBe(MAX_QUANTITY)
    expect(setLineQuantity(lines, 1, 2.9)[0].quantity).toBe(2)
  })

  it('treats NaN as removal', () => {
    expect(setLineQuantity(lines, 1, NaN)).toEqual([{ id: 2, quantity: 1 }])
  })

  it('leaves unknown ids untouched', () => {
    expect(setLineQuantity(lines, 99, 3)).toEqual(lines)
  })
})

describe('removeLine and countItems', () => {
  it('removes a line', () => {
    expect(removeLine([{ id: 1, quantity: 1 }], 1)).toEqual([])
  })

  it('sums quantities', () => {
    expect(
      countItems([
        { id: 1, quantity: 2 },
        { id: 2, quantity: 3 },
      ]),
    ).toBe(5)
    expect(countItems([])).toBe(0)
  })
})

describe('resolveLines and totalPrice', () => {
  const products = [make(1, 1000), make(2, 250)]

  it('joins lines with products and skips unknown ids', () => {
    const entries = resolveLines(
      [
        { id: 1, quantity: 2 },
        { id: 404, quantity: 1 },
        { id: 2, quantity: 4 },
      ],
      products,
    )
    expect(entries.map((entry) => entry.product.id)).toEqual([1, 2])
  })

  it('calculates the total', () => {
    const entries = resolveLines(
      [
        { id: 1, quantity: 2 },
        { id: 2, quantity: 4 },
      ],
      products,
    )
    expect(totalPrice(entries)).toBe(3000)
    expect(totalPrice([])).toBe(0)
  })
})

describe('parseStoredCart', () => {
  it('round-trips a serialized cart', () => {
    const lines = [
      { id: 1, quantity: 2 },
      { id: 3, quantity: 1 },
    ]
    expect(parseStoredCart(serializeCart(lines))).toEqual(lines)
  })

  it('returns an empty cart for missing or broken data', () => {
    expect(parseStoredCart(null)).toEqual([])
    expect(parseStoredCart('')).toEqual([])
    expect(parseStoredCart('{oops')).toEqual([])
    expect(parseStoredCart('{"id":1}')).toEqual([])
  })

  it('drops invalid entries and merges duplicates', () => {
    const raw = JSON.stringify([
      { id: 1, quantity: 2 },
      { id: 1, quantity: 3 },
      { id: 'x', quantity: 1 },
      { id: 2, quantity: 'many' },
      { id: 3, quantity: 0 },
      null,
      42,
    ])
    expect(parseStoredCart(raw)).toEqual([{ id: 1, quantity: 5 }])
  })
})

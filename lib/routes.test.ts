import { readFileSync } from 'fs'
import { join } from 'path'
import { describe, expect, it } from 'vitest'
import { siteLabels, stubPages } from '../helpers/stubs'
import {
  collectStubPages,
  hrefFor,
  isStubLabel,
  knownRoutes,
  parseCategoryIndex,
  slugify,
} from './routes'

describe('parseCategoryIndex', () => {
  it('accepts a valid index', () => {
    expect(parseCategoryIndex('3', 6)).toBe(3)
    expect(parseCategoryIndex(['2', '4'], 6)).toBe(2)
  })

  it('falls back to the first category on invalid input', () => {
    expect(parseCategoryIndex(undefined, 6)).toBe(0)
    expect(parseCategoryIndex('abc', 6)).toBe(0)
    expect(parseCategoryIndex('-1', 6)).toBe(0)
    expect(parseCategoryIndex('6', 6)).toBe(0)
    expect(parseCategoryIndex('1.5', 6)).toBe(0)
  })
})

describe('slugify', () => {
  it('lowercases and hyphenates labels', () => {
    expect(slugify('Where to buy')).toBe('where-to-buy')
    expect(slugify('Sports medicine and rehabilitation')).toBe(
      'sports-medicine-and-rehabilitation',
    )
  })

  it('replaces ampersands and collapses separators', () => {
    expect(slugify('Delivery & payment')).toBe('delivery-and-payment')
    expect(slugify('  Wellness, spa, massage ')).toBe('wellness-spa-massage')
    expect(slugify('Trade-IN')).toBe('trade-in')
  })

  it('keeps digits', () => {
    expect(slugify('3D design')).toBe('3d-design')
  })
})

describe('hrefFor', () => {
  it('returns known routes and anchors', () => {
    expect(hrefFor('For home')).toBe('/for-home')
    expect(hrefFor('Brands')).toBe('/#brands')
    expect(hrefFor('Blog')).toBe('/#news')
  })

  it('ignores surrounding whitespace', () => {
    expect(hrefFor('Ideas & collections ')).toBe('/ideas-and-picks')
  })

  it('deep-links cardio categories', () => {
    expect(hrefFor('Treadmills')).toBe('/cardio-equipments?category=0')
    expect(hrefFor('Rowing machines')).toBe('/cardio-equipments?category=5')
  })

  it('falls back to a stub slug for unknown labels', () => {
    expect(hrefFor('Contacts')).toBe('/contacts')
  })
})

describe('collectStubPages', () => {
  it('skips known routes and dedupes by slug', () => {
    const pages = collectStubPages(['Contacts', 'Contacts ', 'For home', 'FAQ'])
    expect(pages).toEqual([
      { slug: 'contacts', title: 'Contacts' },
      { slug: 'faq', title: 'FAQ' },
    ])
  })
})

describe('site navigation', () => {
  const stubSlugs = new Set(stubPages.map((page) => page.slug))

  it('resolves every navigation label to a route or an existing stub', () => {
    siteLabels.forEach((label) => {
      if (isStubLabel(label)) {
        expect(stubSlugs.has(slugify(label))).toBe(true)
      } else {
        expect(knownRoutes[label.trim()]).toBeTruthy()
      }
    })
  })

  it('never generates a stub that shadows a real page', () => {
    const reserved = [
      'cardio-equipments',
      'fitness-clubs',
      'for-home',
      'ideas-and-picks',
      'cart',
      '404',
    ]
    reserved.forEach((slug) => expect(stubSlugs.has(slug)).toBe(false))
  })

  it('has unique stub slugs', () => {
    expect(stubSlugs.size).toBe(stubPages.length)
  })

  it('covers every home card title used in components', () => {
    const files = [
      'page-components/Equipments/Equipments.tsx',
      'page-components/FitnessClubs/FitnessClubs.tsx',
    ]

    files.forEach((file) => {
      const source = readFileSync(join(__dirname, '..', file), 'utf8')
      const titles = Array.from(
        source.matchAll(/<Card[^>]*?title="([^"]+)"/gs),
        (match) => match[1],
      )

      expect(titles.length).toBeGreaterThan(0)
      titles.forEach((title) => {
        if (isStubLabel(title)) {
          expect(stubSlugs.has(slugify(title))).toBe(true)
        }
      })
    })
  })
})

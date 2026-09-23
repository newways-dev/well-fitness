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
  it('transliterates cyrillic labels', () => {
    expect(slugify('Доставка и оплата')).toBe('dostavka-i-oplata')
    expect(slugify('Где купить')).toBe('gde-kupit')
    expect(slugify('Спортивная медицина и реабилитация')).toBe(
      'sportivnaya-meditsina-i-reabilitatsiya',
    )
  })

  it('trims and collapses separators', () => {
    expect(slugify('  Wellness, СПА, Массаж ')).toBe('wellness-spa-massazh')
    expect(slugify('Trade-IN')).toBe('trade-in')
  })

  it('keeps digits', () => {
    expect(slugify('3D проект')).toBe('3d-proekt')
  })
})

describe('hrefFor', () => {
  it('returns known routes and anchors', () => {
    expect(hrefFor('Для дома')).toBe('/for-home')
    expect(hrefFor('Бренды')).toBe('/#brands')
    expect(hrefFor('Блог')).toBe('/#news')
  })

  it('ignores surrounding whitespace', () => {
    expect(hrefFor('Идеи и подборки ')).toBe('/ideas-and-picks')
  })

  it('deep-links cardio categories', () => {
    expect(hrefFor('Беговые дорожки')).toBe('/cardio-equipments?category=0')
    expect(hrefFor('Гребные тренажеры')).toBe('/cardio-equipments?category=5')
  })

  it('falls back to a stub slug for unknown labels', () => {
    expect(hrefFor('Контакты')).toBe('/kontakty')
  })
})

describe('collectStubPages', () => {
  it('skips known routes and dedupes by slug', () => {
    const pages = collectStubPages(['Контакты', 'Контакты ', 'Для дома', 'FAQ'])
    expect(pages).toEqual([
      { slug: 'kontakty', title: 'Контакты' },
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

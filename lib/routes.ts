export type StubPage = {
  slug: string
  title: string
}

const CARDIO = '/cardio-equipments'

export const knownRoutes: Record<string, string> = {
  'For home': '/for-home',
  'For fitness clubs': '/fitness-clubs',
  'Ideas & collections': '/ideas-and-picks',
  Catalog: '/#catalog',
  Brands: '/#brands',
  'Our brands': '/#brands',
  'About us': '/#about',
  'Our story': '/#about',
  Blog: '/#news',
  News: '/#news',
  'Cardio equipment': CARDIO,
  'Professional cardio equipment': CARDIO,
  Treadmills: `${CARDIO}?category=0`,
  'Elliptical trainers': `${CARDIO}?category=1`,
  'Exercise bikes': `${CARDIO}?category=2`,
  Steppers: `${CARDIO}?category=3`,
  'Ski trainers': `${CARDIO}?category=4`,
  'Rowing machines': `${CARDIO}?category=5`,
}

export function slugify(label: string): string {
  return label
    .trim()
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function parseCategoryIndex(
  value: string | string[] | undefined,
  total: number,
): number {
  const raw = Array.isArray(value) ? value[0] : value
  const index = Number(raw)

  return Number.isInteger(index) && index >= 0 && index < total ? index : 0
}

export function isStubLabel(label: string): boolean {
  return !Object.prototype.hasOwnProperty.call(knownRoutes, label.trim())
}

export function hrefFor(label: string): string {
  const key = label.trim()
  return isStubLabel(key) ? `/${slugify(key)}` : knownRoutes[key]
}

export function collectStubPages(labels: string[]): StubPage[] {
  const pages = new Map<string, StubPage>()

  labels.filter(isStubLabel).forEach((label) => {
    const slug = slugify(label)
    if (slug && !pages.has(slug)) {
      pages.set(slug, { slug, title: label.trim() })
    }
  })

  return Array.from(pages.values())
}

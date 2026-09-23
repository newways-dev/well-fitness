export type StubPage = {
  slug: string
  title: string
}

const CARDIO = '/cardio-equipments'

export const knownRoutes: Record<string, string> = {
  'Для дома': '/for-home',
  'Для фитнес клуба': '/fitness-clubs',
  'Для фитнес клубов': '/fitness-clubs',
  'Идеи и подборки': '/ideas-and-picks',
  Каталог: '/#catalog',
  Бренды: '/#brands',
  'Наши бренды': '/#brands',
  'О компании': '/#about',
  'О нас': '/#about',
  Блог: '/#news',
  Новости: '/#news',
  Кардиотренажеры: CARDIO,
  'Профессиональные кардиотренажеры': CARDIO,
  'Беговые дорожки': `${CARDIO}?category=0`,
  'Эллиптические тренажеры': `${CARDIO}?category=1`,
  Велотренажеры: `${CARDIO}?category=2`,
  Степперы: `${CARDIO}?category=3`,
  'Горнолыжные тренажеры': `${CARDIO}?category=4`,
  'Гребные тренажеры': `${CARDIO}?category=5`,
}

const TRANSLIT: Record<string, string> = {
  а: 'a',
  б: 'b',
  в: 'v',
  г: 'g',
  д: 'd',
  е: 'e',
  ё: 'e',
  ж: 'zh',
  з: 'z',
  и: 'i',
  й: 'y',
  к: 'k',
  л: 'l',
  м: 'm',
  н: 'n',
  о: 'o',
  п: 'p',
  р: 'r',
  с: 's',
  т: 't',
  у: 'u',
  ф: 'f',
  х: 'h',
  ц: 'ts',
  ч: 'ch',
  ш: 'sh',
  щ: 'sch',
  ъ: '',
  ы: 'y',
  ь: '',
  э: 'e',
  ю: 'yu',
  я: 'ya',
}

export function slugify(label: string): string {
  return label
    .trim()
    .toLowerCase()
    .split('')
    .map((char) => (char in TRANSLIT ? TRANSLIT[char] : char))
    .join('')
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

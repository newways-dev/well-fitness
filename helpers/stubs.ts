import { links } from '../components/Links/linksArray'
import { collectStubPages } from '../lib/routes'
import { fitnessClubs } from './forFitnessClubs'
import { forHomeCatalog } from './forHome'
import { about, catalog, help, services } from './footer'

export const homeCardLabels = [
  'Силовые тренажеры',
  'Батуты',
  'Игровые столы',
  'Массажные кресла',
  'Фитнес аксессуары',
  'Грузоблочные тренажеры',
  'Тренажеры на свободных весах',
  'Функциональный тренинг',
  'Wellness, СПА, Массаж',
  'Спортивная медицина и реабилитация',
  'Свободные веса',
]

const catalogLabels = [...forHomeCatalog, ...fitnessClubs].flatMap((item) => [
  item.title,
  ...item.list.map((entry) => entry.title),
])

const footerLabels = [catalog, help, services, about].flatMap((group) =>
  group.flatMap((section) => section.links),
)

export const siteLabels = [
  ...links,
  ...footerLabels,
  ...catalogLabels,
  ...homeCardLabels,
]

export const stubPages = collectStubPages(siteLabels)

export function findStubPage(slug: string) {
  return stubPages.find((page) => page.slug === slug)
}

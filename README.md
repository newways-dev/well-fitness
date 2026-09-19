# Well Fitness

![Next.js](https://img.shields.io/badge/Next.js-12-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-4.7-blue?logo=typescript)
![Sass](https://img.shields.io/badge/Sass-1.54-CC6699?logo=sass)
![Fiverr](https://img.shields.io/badge/Client-Fiverr-1DBF73?logo=fiverr&logoColor=white)

Frontend for a fitness-equipment e-commerce storefront: category pages (cardio, fitness clubs, for home), product cards with pricing/ratings/stock status, a sort control, filter UI, and content sections (brands, news, ideas and picks) driven off static data.

> [!NOTE]
> This was a freelance job found on Fiverr: the client provided a design/mockup and asked for it built as markup and interaction only, no backend — a pixel-accurate implementation of an existing layout, not an original design. All product data shown (prices, stock, ratings) is static mock data.

## Component library

A sample of the 23 components under `components/` — small, single-purpose, and typed:

| Component | Purpose |
|---|---|
| `ProductCard` | Image, badges, rating, price/old price, stock indicator, add-to-cart button |
| `Badge` | "New" / "favorite" / "discount" markers rendered on product cards |
| `InStock` | Stock-level indicator driven by `InStockEnum` |
| `Rating` | Star rating display |
| `Htag` | Semantic heading wrapper (`h1`–`h3`) decoupled from visual size |
| `Sort` | Sort-option list with active-state highlighting |
| `Filters` | Checkbox filter list (category, price, etc.) |
| `Tabs` | Tabbed content switcher |
| `CatalogCard` | Category tile (image, title, list of sub-items with quantities) used on the homepage |
| `BreadCrumbs` | Home icon + current page label |

## Key decisions

- **A dedicated `InStockEnum` instead of free-text stock labels** ([components/ProductCard/ProductCard.props.ts](components/ProductCard/ProductCard.props.ts)) — stock status is a typed enum (`inStock`, `littleLeft`, ...) consumed by both `ProductCard` and the `InStock` indicator component, so the same status always renders the same way instead of matching on arbitrary strings.
- **`Htag` as a semantic heading wrapper** ([components/Htag](components/Htag)) — headings go through one component that takes a `tag` prop (`h1`–`h3`), so heading level and heading styling are set independently instead of every section hardcoding its own `<h2>`/`<h3>` with matching CSS.
- **23 components split from ~9 page-sections** (`components/` vs `page-components/`) — small reusable primitives (Badge, Rating, InStock, Button, Filters, Sort) are separate from the larger page-specific sections (Equipments, FitnessClubs, IdeasAndPicks, CardioEquipments) that compose them, mirroring the pattern used across my other freelance frontends.
- **`react-slick` for carousels** ([page-components/Slider](page-components/Slider)) — used for the homepage image slider and the "selections" carousel rather than a hand-rolled scroll component, since the design called for arrow navigation and slide transitions out of the box.

## Stack

| Layer | Technology | Role in this project |
|---|---|---|
| Framework | Next.js 12 (Pages Router) | Routing, page shells |
| Language | TypeScript | Typed components and mock data |
| Styling | Sass (`.module.scss`), `clsx` | Per-component scoped styles |
| Carousel | react-slick / slick-carousel | Homepage and product sliders |
| Icons | SVGR (`@svgr/webpack`) | SVGs imported as React components |

## Run locally

```bash
git clone <repo-url>
cd well-fitness
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000). No environment variables are required — there is no backend or external API to configure.

<details>
<summary>Other scripts</summary>

| Script | What it does |
|---|---|
| `yarn dev` | Starts the Next.js dev server |
| `yarn build` | Production build |
| `yarn start` | Serves the production build |
| `yarn lint` | Runs `next lint` |

</details>

## Project structure

```
.
├── pages/              # Routes: home, cardio-equipments, fitness-clubs, for-home, ideas-and-picks
├── page-components/    # Page-specific sections (Equipments, FitnessClubs, Slider, Brands, News, ...)
├── components/         # Reusable UI primitives (ProductCard, Badge, Rating, InStock, Filters, Sort, ...)
├── layout/             # Header (logo, nav, menu), Footer
├── helpers/             # Static mock data (products by category, news, footer links)
└── styles/              # Global Sass
```

## Tests and status

There are no automated tests. `Sort` has real state (clicking an option highlights it) and `Filters` renders checkboxes, but neither is wired to actually reorder or filter a product list — this was markup and interaction, not a working catalog backend. This repo is a frontend snapshot delivered at the end of the engagement — it reflects the state at handoff, not an actively developed product.

## License

No license file is included. There was no written contract for this engagement — it was an informal freelance job. The code is shown here for portfolio purposes.

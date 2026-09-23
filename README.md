# Well Fitness

![Next.js](https://img.shields.io/badge/Next.js-12-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-4.7-blue?style=for-the-badge&logo=typescript)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Vitest](https://img.shields.io/badge/Tested_with-Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)
![Fiverr](https://img.shields.io/badge/Client-Fiverr-1DBF73?style=for-the-badge&logo=fiverr&logoColor=white)

Frontend for a fitness-equipment storefront aimed at the European market: a cardio catalog with working sorting, filtering and category tabs, a cart with a header counter, category pages, placeholder pages for every navigation link, and content sections (brands, news, ideas and collections). English copy, prices in euros.

> [!NOTE]
> This started as a freelance job found on Fiverr: the client provided a design and asked for it built as markup and interaction only, with no backend, so the first version was a pixel-accurate implementation of an existing layout rather than an original design. After delivery I extended the repo myself: catalog logic, navigation, the cart, unit tests, and an English/Europe adaptation (copy, euro prices, map, banners, logo). All product data is static mock data.

## What works

- **Catalog** (`/cardio-equipments`): category tabs, four sort orders, checkbox filters by manufacturer, features and deals, a result counter, and an empty state with a reset button. Category tiles on the home page and the category pages deep-link into a tab (`?category=3`).
- **Cart** (`/cart`): add from any product card, quantity stepper (1–99), remove, clear, running total, and a counter badge in the header. It survives a reload and syncs between tabs. Checkout is not connected and says so on screen.
- **Navigation**: every link in the top menu, the category bar, the footer columns and the category tiles goes somewhere. Some scroll to a section of the home page (`#brands`, `#about`, `#news`), some open a real page, the rest open a placeholder page with the right title.

## Component library

A sample of the 27 components under `components/`. They are small, single-purpose and typed:

| Component | Purpose |
|---|---|
| `ProductCard` | Image, badges, rating, price and old price, stock indicator, buy button showing the quantity already in the cart |
| `Banner` | Photo with a gradient overlay and English headline, accent text, caption and an optional action, so banner text lives in code instead of inside an image |
| `Sort`, `Categories`, `Filters` | Controlled components: the page owns the state, they only render it |
| `LabelLink` | Turns a human label into a link through one lookup (`hrefFor`) |
| `Rating` | Star rating driven by a `value` prop |
| `InStock` | Stock-level indicator driven by `InStockEnum` |
| `Htag` | Semantic heading wrapper (`h1`–`h3`) decoupled from visual size |
| `BreadCrumbs` | Home icon plus clickable parent crumbs from a `"A > B"` string |

## Key decisions

- **Catalog logic is pure functions in `lib/`, not inside components** ([lib/catalog.ts](lib/catalog.ts)) — filtering (any value within a group, all groups together), sorting, price formatting and filter toggling are plain functions over typed `Product` data, so they are unit-tested without rendering anything. The trade-off is that the page component still wires the state by hand.
- **The cart stores only `{ id, quantity }`** ([lib/cart.ts](lib/cart.ts), [context/CartContext.tsx](context/CartContext.tsx)) — titles and prices are looked up from the product data when rendering, so a price change can never leave a stale price in someone's cart. The provider reads `localStorage` after mount to avoid a server/client hydration mismatch, which means the cart page shows a blank placeholder for a moment before the real content.
- **One label-to-route table drives all links, and placeholder pages are generated from the same data** ([lib/routes.ts](lib/routes.ts), [helpers/stubs.ts](helpers/stubs.ts), [pages/[slug].tsx](pages/%5Bslug%5D.tsx)) — menu, footer and tile labels are collected at build time, anything without a real route becomes a static placeholder page. A test fails if a label resolves to nothing. The trade-off is that placeholder pages have no content of their own.
- **Banner text is rendered over photos, not baked into images** ([components/Banner](components/Banner)) — the original banners had text inside the bitmap, which cannot be translated or edited. The cost is that text over photos depends on the gradient overlay for contrast, tuned per banner.
- **A dedicated `InStockEnum` instead of free-text stock labels** ([components/ProductCard/ProductCard.props.ts](components/ProductCard/ProductCard.props.ts)) — one typed enum is consumed by both `ProductCard` and `InStock`, so the same status always renders the same way.
- **`react-slick` for carousels** ([page-components/Slider](page-components/Slider)) — used for the home slider and the selections carousel instead of a hand-rolled scroller, because the design called for arrows and slide transitions.

## Stack

| Layer | Technology | Role in this project |
|---|---|---|
| Framework | Next.js (Pages Router) | Routing, static generation of placeholder pages |
| Language | TypeScript | Typed components, products and cart |
| Styling | Sass (`.module.scss`), `clsx` | Per-component scoped styles |
| State | React context, `localStorage` | Cart state and persistence |
| Carousel | react-slick / slick-carousel | Home and product sliders |
| Icons | SVGR (`@svgr/webpack`) | SVGs imported as React components |
| Testing | Vitest | Unit tests for the logic in `lib/` |

## Run locally

```bash
git clone <repo-url>
cd well-fitness
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000). No environment variables are required: there is no backend or external API.

<details>
<summary>Other scripts</summary>

| Script | What it does |
|---|---|
| `yarn dev` | Starts the Next.js dev server |
| `yarn build` | Production build |
| `yarn start` | Serves the production build |
| `yarn lint` | Runs `next lint` |
| `yarn test` | Runs the Vitest suite once |

</details>

## Project structure

```
.
├── pages/              # Routes: home, cardio-equipments, fitness-clubs, for-home, ideas-and-picks, cart, [slug] placeholders
├── page-components/    # Page-specific sections (Equipments, CardioEquipments, Cart, IdeasAndPicks, Slider, ...)
├── components/         # Reusable UI primitives (ProductCard, Banner, Sort, Filters, LabelLink, ...)
├── context/            # CartContext: cart state and localStorage persistence
├── lib/                # Pure logic and its tests: catalog, cart, routes
├── helpers/            # Static mock data (products, footer links, news) and placeholder-page registry
├── layout/             # Header (logo, nav, cart counter), Footer
├── public/images/      # Optimized stock photos (stock/), generated Europe map SVG
└── styles/             # Global Sass
```

## Tests and status

50 Vitest tests cover the logic in `lib/`: filtering, sorting, price formatting, cart arithmetic and storage parsing, slug generation, route resolution, and a check that every navigation label resolves to a route or a placeholder page. `yarn lint` and `yarn build` pass.

Known limits:

- There are no component or end-to-end tests; the UI was checked by hand in the browser.
- Sorting, filters and the cart work on the cardio catalog only. The other category pages are static tiles, and the catalog holds 12 mock products that all share one product image.
- Checkout is not connected, and most secondary buttons ("Learn more", "All brands", "Full collection") do nothing.
- The Europe map is a static SVG generated once from Natural Earth country data with d3-geo; the generator script is not kept in the repo, so changing the cities means editing the SVG.
- Prices, stock and ratings are illustrative, not real product data.

This repo reflects the state after my own extensions to the delivered job, not an actively developed product.

## Credits and license

Banner photos are from Unsplash, taken from the file names: Alex Tyson, Gold's Gym Nepal, Ikrom Chinaski, Stefan Ghintuiala, Craig Lovelidge, Sule Makaroglu, Andrew Kayani and Rahul Singh. Product photos and manufacturer logos come from the client's design and belong to their owners.

No license file is included. There was no written contract for the original engagement, it was an informal freelance job. The code is shown here for portfolio purposes.

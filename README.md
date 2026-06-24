# Bakke Digital — Next.js site

A two-page marketing site (homepage + WordPress service page) built with
Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Pages

- `/` — homepage: hero, services showcase, process, case study, testimonial, CTA
- `/wordpress` — WordPress service page: what's included, pricing, FAQ, CTA

## Structure

```
app/
  layout.tsx        root layout, fonts, metadata
  globals.css        Tailwind base + small custom utilities (reveal, mock tilt, FAQ collapse)
  page.tsx            homepage
  wordpress/
    page.tsx          WordPress service page
components/
  Header.tsx          sticky nav, shared across pages
  Footer.tsx          shared footer + contact details
  FloorRail.tsx       signature scroll-position rail (client component)
  Reveal.tsx          scroll-triggered fade-in wrapper (client component)
  SectionHead.tsx      eyebrow + heading + body pattern used per section
  CtaBanner.tsx       orange CTA banner used on both pages
  PriceCard.tsx       pricing tier card (WordPress page)
  FAQAccordion.tsx    accordion list (client component)
```

## Running it

Requires Node 18.18+ (this was built and tested on Node 22).

```bash
npm install
npm run dev      # http://localhost:3000
```

To build for production:

```bash
npm run build
npm run start
```

Fonts (Space Grotesk, Inter, IBM Plex Mono) load via `next/font/google` at
build time, so an internet connection is required during `npm install` /
the first `npm run build` or `npm run dev`.

## Design tokens

Defined in `tailwind.config.ts`:

| Token        | Hex                | Use                          |
|--------------|---------------------|-------------------------------|
| `ink`        | `#1F1B17`           | dark sections, body text     |
| `ink-soft`   | `#4A433C`           | secondary/body copy           |
| `paper`      | `#EFE7D8`           | page background                |
| `paper-2`    | `#E5DBC8`           | alternate section background  |
| `clay`       | `#D9622B`           | primary accent / CTA           |
| `clay-deep`  | `#A8431A`           | accent hover / dark variant   |
| `moss`       | `#5B6B58`           | secondary accent (calm green) |

## Extending

To add the remaining service pages (WooCommerce, Shopify, SEO), copy
`app/wordpress/page.tsx` as a starting structure — the hero, included grid,
process, pricing and FAQ sections are all built from the shared components
in `components/`, so a new page mostly means swapping copy and stats.

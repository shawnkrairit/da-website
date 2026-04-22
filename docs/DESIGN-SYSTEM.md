# Design System

## Philosophy

Professional dark law firm aesthetic inspired by Aston Martin's green-gold palette and Baker McKenzie's editorial structure. Refined, precise, and internationally positioned — every element should feel intentional.

## Colors

Defined as CSS custom properties in `globals.css`.

| Token | Usage |
|---|---|
| `--forest-deep` | Page base background — darkest layer |
| `--forest` | Cards, elevated surfaces — slightly brighter than base |
| `--forest-light` | Consider adding this — one step brighter than `--forest` for hover states and nested components |
| `--gold` | Primary accent — headings highlights, dots, active states, CTAs |
| `--text-primary` | White — H1, H2, names, important labels |
| `--text-secondary` | Muted white — body text, descriptions, captions |
| `--border-muted` | Subtle borders — card outlines, dividers |

> Note: `--forest` currently feels too close to `--forest-deep`. Add `--forest-light` as a third surface level for components that need more visual separation.

## Typography

### Font Families

| Role | Font | Language Coverage |
|---|---|---|
| Display / H1 | Libre Baskerville | English only — serif, editorial |
| Thai headings | Noto Sans Thai | Thai script |
| Chinese headings | Noto Sans SC | Simplified Chinese |
| Body / UI | Noto Sans | All languages default |

### Usage Rule

Libre Baskerville is applied to H1 only — and only when the content is English. Thai and Chinese headings at all levels use Noto Sans Thai / Noto Sans SC respectively. All body text, labels, tags, and UI elements use Noto Sans as the base with Thai/SC as fallback.

```css
h1 {
  font-family: 'Libre Baskerville', 'Noto Sans Thai', 'Noto Sans SC', serif;
}

body {
  font-family: 'Noto Sans', 'Noto Sans Thai', 'Noto Sans SC', sans-serif;
}
```

### Scale

| Level | Size (desktop) | Size (mobile) | Weight |
|---|---|---|---|
| H1 | 48–64px | 32px | 600 |
| H2 | 36px | 24px | 600 |
| H3 | 24px | 18px | 600 |
| Body | 16–18px | 15px | 400 |
| Small / Label | 13–14px | 12px | 400 |

## Components

Built on shadcn/ui primitives with custom dark theme overrides.

Shadcn components are restyled to match the forest-gold palette — default shadcn light/zinc theme is not replaced yet, you can override in `globals.css` and `tailwind.config.ts`.

## Reference

Layout structure, Insights page design, and editorial typography are modelled after Baker McKenzie's website — same consulting/professional services environment applied to a law firm context.
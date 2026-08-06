# Portfolio, Ryan Chikhi

Personal portfolio, in French and English. Next.js App Router, TypeScript and SCSS.

The previous hand-written HTML/CSS site is preserved on the `legacy` branch.

## Running it

```bash
pnpm install
pnpm dev          # http://localhost:3000 → redirects to /fr or /en
```

| Command          | What it does                             |
| ---------------- | ---------------------------------------- |
| `pnpm dev`       | Dev server                               |
| `pnpm build`     | Production build (every page prerenders) |
| `pnpm start`     | Serve the build                          |
| `pnpm lint`      | ESLint                                   |
| `pnpm typecheck` | `tsc --noEmit`                           |
| `pnpm format`    | Prettier over `ts, tsx, scss, json`      |
| `pnpm optimize:images` | Shrink oversized files in `public/` (`--write` to apply) |

## Editing the content

Everything on the site comes from **`src/data/resume.ts`**, typed by
`src/data/types.ts`. Every text field carries both locales:

```ts
role: { fr: 'Développeur fullstack', en: 'Fullstack developer' }
```

Adding an experience, a school or a project means adding an entry there, no
component changes. Dates are ISO (`2025-01-06`); the durations shown on the
timeline are computed from them by `src/lib/dates.ts`, so they can never
contradict the period printed beside them.

A new project needs a `slug`: it gets a page at `/[locale]/projects/[slug]`
automatically via `generateStaticParams`.

UI strings, nav labels, section headings, button text, live in
`src/i18n/locales/{fr,en}.json`. `fr.json` is the reference shape and `en.json`
is type-checked against it, so a missing key fails the build rather than
rendering blank.

## Adding images

Every image slot falls back to a coloured placeholder, so files can be dropped
in one at a time and each one upgrades the page on its own, with no code
changes.

| What | Where | How to switch it on |
| --- | --- | --- |
| Portrait | `public/me.png` | `resume.portrait.src` + `cutout` |
| About / spotlight / Paris photos | anywhere in `public/` | add `src` to that block's `picture` |
| Project banner | `public/projects/<slug>.jpg` | add `banner:` to that project |
| Project mark | `public/logos/<slug>.svg` | add `logo:` to that project |
| Company / school logo | `public/logos/<name>.svg` | add `logo:` to that entry |

The portrait uses `cutout: true`, which is what makes the hero work: the PNG has
its background removed, so it stands inside the gradient orb with its head clear
of the circle. Keep any replacement background-free, roughly square, subject
centred. Setting `cutout: false` falls back to a plain circular mask.

The `picture` slots in `about`, `spotlight` and `place` render a pink gradient
placeholder until given a `src`. They are 4:3 and slide in from the side on
scroll, so landscape shots work best.

### Logos

Tile marks live in `public/logos/`. A logo drawn to sit on a dark background
(3W Academy's is white-on-dark) needs `logoBg` set to a dark colour, otherwise
it disappears on the light tile. A self-contained mark like Tilkal's needs
nothing. A project with a `logo` but no `banner` uses the logo as the banner,
so set `accent` to that project's own brand colour rather than the site pink.

Stack logos orbiting the portrait live in `public/tech/` and come from
[devicon](https://github.com/devicons/devicon) (MIT). The set is listed in
`ORBIT` at the bottom of `components/sections/Portrait.tsx`; each entry carries
its position plus two flags:

- `outer` puts it on the widest ring, dropped below `md` so nothing overflows
- `darkGlyph` inverts near-black logos (Next.js, Prisma) for the dark theme

### Keeping files small

`pnpm optimize:images` reports oversized files under `public/`; add `--write` to
rewrite them. It trims transparent padding, caps the longest edge at 1400px and
recompresses. Worth running whenever you add a photo straight from a camera or
a background remover.

## Layout

Section order follows the reference site exactly:

```
Hero
Projects            wide breakout, no heading, sits straight under the hero
Technical skills    selectable cards with an expanding detail panel
About me            alternating text / photo rows, headings use Highlight
My projects         second About row, mirrored
Hello from Paris    location block
My education        side-by-side columns with dividers
My experience       logo + text rows
Undercut            featured project spotlight
Soft skills         four-item grid
Footer              dark panel with the call to action
```

The reference also has a photo Gallery between Skills and About. It is not built
here because there are no photos for it yet; drop it in at that position when
there are.

```
src/
  app/[locale]/          routes; the locale layout is the root layout
    projects/[slug]/     one page per project
  components/
    layout/              navigation, footer, theme, locale, smooth scroll
    sections/            the blocks listed above, in that order in page.tsx
    ui/                  button, highlight, picture, project card, logo tile, reveal
  data/                  resume content + types
  i18n/                  locale config and dictionaries
  lib/                   fonts, date formatting
  styles/                tokens, reset, typography, mixins
  proxy.ts               redirects `/` to the visitor's best locale
```

## Design system

Closely follows [vincelinise.com](https://github.com/ecnivtwelve/vincelinise.com):
a near-white sheet floating on a fixed gradient wash, a floating pill
navigation, a centred hero, and phrases highlighted as filled italic-serif
pills. The palette is a pink build of that structure.

Tokens live in `src/styles/_variables.scss` as CSS custom properties, with a
dark palette under `[data-theme='dark']`. `src/styles/_mixins.scss` is injected
into every `*.module.scss` by `next.config.ts`, so components get `@include md`,
`@include prose`, `@include card` without importing anything.

- **Glow** `#fdc9ff` (top of the wash) · **Page** `#f6e3f8` · **Sheet** `#fffbff`
- **Ink** `#3a1140` · **Primary** `#b0198a`
- **Type** IBM Plex Sans throughout; Instrument Serif italic *only* inside
  highlight pills

Two rules carry most of the feel and are easy to undo by accident:

1. **Section headings are large and light** (`font-weight: 300`). The size does
   the work. Bolding them is the quickest way to lose the reference's look.
2. **Highlight pills are rationed**, the hero and the closing CTA, nowhere
   else. They stop reading as emphasis if they appear more often.

Secondary text uses `opacity` rather than a separate grey token, so it stays
tinted by whatever surface is behind it. Text sitting on a primary fill must use
`--color-on-primary`, not `#fff`: the dark palette's pink is far too bright to
carry white.

Theme is applied by an inline script before first paint
(`components/layout/ThemeScript.tsx`) so there is no flash of the wrong palette.

## Accessibility and motion

Every Motion entrance ships from the server as an inline `opacity: 0`, so
visibility is never left to JS alone:

- `Reveal.module.scss` force-shows `.reveal` under `prefers-reduced-motion`
- a `<noscript>` block in the locale layout unhides anything carrying an inline
  `opacity:0`, which is exactly the Motion-driven set and nothing else

Deciding this in JS via `useReducedMotion()` does **not** work, the hook only
resolves after hydration, so the hidden markup ships regardless. CSS is the
authority here; keep it that way.

Ambient motion (drifting backdrop blobs, floating stack pills, the pulsing
availability dot) is disabled under `prefers-reduced-motion`.

### Theme and client navigation

`data-theme` lives on `<html>` and is set by an inline script before first
paint, so React never learns about it, and drops it on every client-side
navigation, which used to snap a dark page back to light when switching locale.
`components/layout/ThemeSync.tsx` re-applies it in a **layout** effect keyed on
the pathname, restoring it before the browser paints. Don't downgrade that to a
passive `useEffect`: it will flash.

### Motion and CSS transforms

Motion writes `transform` inline, so a CSS `transform` on the same element is
dead code. Where both are needed, they sit on different elements, see the
portrait's hover scale (on the `<img>`) and the cutout's hover lift (which
animates `bottom`, not `transform`).

## Deploying

Vercel, zero config. Push to `main`; the build is fully static apart from the
locale redirect in `src/proxy.ts`.

Set the real domain in `SITE_URL` in `src/app/[locale]/layout.tsx` before going
live, it seeds `metadataBase`, canonicals and Open Graph URLs.

# Typography and color audit

Date: 2026-02-06

## Scope

- Files reviewed: global styles, layout, and core UI components and pages under src.
- Goal: document current font sizes and color usage, then propose a simplified version with fewer sizes and fewer gray shades.

## Current typography

### Global defaults (base layer)

- Body: text-sm (14px), font-sans.
- H1: text-2xl, lg:text-4xl, font-semibold.
- H2: text-lg, font-medium.
- Span: text-sm, font-normal (global rule affects all spans).
- H4: text-sm, font-medium.
- H5: text-sm, font-medium, text-secondary.
- Prose: uses Tailwind typography with dark:prose-invert; projects use prose-sm.

### Component/page overrides

- Navigation: name text-base, md:text-lg; breadcrumb text-sm, md:text-base.
- PostCard: title text-base; date text-xs.
- ProjectCard: "See more" text-xs.
- Footer: text-sm.
- Buttons: text-sm, font-medium.
- Post page date: text-sm.
- Project page date: text-sm.

### Active size set (observed)

- text-xs
- text-sm (dominant body size)
- text-base
- text-lg
- text-2xl
- text-4xl
- prose-sm

### Examples by size (so you can remove/merge)

- text-xs: "See more" chip in [src/components/ProjectCard.tsx](src/components/ProjectCard.tsx#L31) and post date in [src/components/PostCard.tsx](src/components/PostCard.tsx#L18).
- text-sm: breadcrumb in [src/components/Navigation.tsx](src/components/Navigation.tsx#L39) and global body size in [src/app/global.css](src/app/global.css#L29).
- text-base: nav name in [src/components/Navigation.tsx](src/components/Navigation.tsx#L36) and post title in [src/components/PostCard.tsx](src/components/PostCard.tsx#L13).
- text-lg: H2 default in [src/app/global.css](src/app/global.css#L37).
- text-2xl / text-4xl: H1 default in [src/app/global.css](src/app/global.css#L33).
- prose-sm: project detail MDX in [src/app/projects/[slug]/page.tsx](src/app/projects/[slug]/page.tsx#L65).

## Current color system

### CSS variables (global.css)

- --background
- --primary
- --secondary
- --accent
- --muted

### Tailwind token usage

- text-primary, text-secondary
- bg-background, bg-muted
- border-accent, border-muted
- decoration-primary

### Direct gray/neutral usage (mix of families)

- text-gray-500
- text-zinc-400
- border-gray-200, border-gray-700
- border-zinc-800/60, bg-zinc-900
- text-neutral-50/200/300/700/800
- decoration-neutral-400/600
- bg-slate-500 (with opacity)
- text-black
- raw hex: border-[#333333], bg-[#1c1c1c]

### Examples by color (so you can remove/merge)

- Token colors in use: text-primary in [src/components/Navigation.tsx](src/components/Navigation.tsx#L36) and [src/app/about/page.tsx](src/app/about/page.tsx#L85); text-secondary in [src/components/Navigation.tsx](src/components/Navigation.tsx#L39).
- Background tokens: bg-muted in [src/components/ProjectCard.tsx](src/components/ProjectCard.tsx#L7), bg-background in [src/components/ProjectCard.tsx](src/components/ProjectCard.tsx#L31).
- Border tokens: border-accent in [src/app/page.tsx](src/app/page.tsx#L16) and border-muted in [src/app/posts/page.tsx](src/app/posts/page.tsx#L39).

- Direct gray: text-gray-500 in [src/app/layout.tsx](src/app/layout.tsx#L72).
- Direct zinc: text-zinc-400 in [src/app/posts/[slug]/page.tsx](src/app/posts/[slug]/page.tsx#L64) and border-zinc-800/60 + bg-zinc-900 in [src/app/about/page.tsx](src/app/about/page.tsx#L67).
- Direct gray borders: border-gray-200 and border-gray-700 in [src/app/projects/page.tsx](src/app/projects/page.tsx#L34).
- Neutral palette in prose: decoration-neutral-400/600 in [src/app/global.css](src/app/global.css#L94), text-neutral-300/700 in [src/app/global.css](src/app/global.css#L98).
- Neutral palette in code blocks: border-neutral-800 in [src/app/global.css](src/app/global.css#L107), text-neutral-800/200 + border-neutral-100 in [src/app/global.css](src/app/global.css#L111), text-neutral-50 in [src/app/global.css](src/app/global.css#L132).
- Slate highlights: bg-slate-500 in [src/app/global.css](src/app/global.css#L179) and [src/app/global.css](src/app/global.css#L185).
- Hardcoded black/hex: text-black in [src/app/global.css](src/app/global.css#L162); border-[#333333] and bg-[#1c1c1c] in [src/app/global.css](src/app/global.css#L188).

### Summary

- Multiple gray families are mixed: gray, zinc, neutral, slate, plus raw hex.
- The intended palette is already defined by CSS variables, but some pages and prose styles bypass it.

## Proposed simplified version (fewer sizes, fewer shades)

### Typography scale (recommended)

Keep one font family and reduce sizes to a tight scale:

- XS (12px): metadata, tags, dates, helper text.
- SM (14px): body text, secondary copy.
- BASE (16px): navigation labels, card titles, links.
- XL (28px -> 36px on lg): H1 only.
- L (22px -> 28px on lg): H2 only.

Usage mapping:

- Body: text-sm (14px) or text-base (16px). Pick one and make it the default.
- Navigation + card titles: text-base.
- Metadata (dates, tags): text-xs.
- Section headings: H2 uses L size.
- Page titles: H1 uses XL size.
- Remove prose-sm unless specifically needed for dense text.

### Color palette (grayscale only)

Reduce to 4-5 tokens and stop using raw gray families:

- --background: light gray (page background)
- --primary: near-black (main text)
- --secondary: mid-gray (secondary text)
- --muted: very light gray (surfaces, subtle fills)
- --border: light gray (borders, dividers)

Dark mode swaps values, but uses the same tokens.

Recommended rule:

- Only use token classes: text-primary, text-secondary, bg-background, bg-muted, border-border.
- Avoid direct gray/zinc/neutral/slate or hex.

### Why this fits the current look

- Your UI is already minimal and monochrome; consolidating to 4-5 grays keeps the aesthetic while making it more consistent.
- Reducing size variants makes typography rhythm tighter and easier to maintain.

## Optional follow-up

- Replace any direct gray/zinc/neutral classes with tokenized classes.
- Decide on one body size (14px or 16px) and normalize spans/headings accordingly.

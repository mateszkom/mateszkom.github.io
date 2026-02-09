# Portfolio Technical Audit

## Snapshot
- Stack: Next.js (app router), MDX + Contentlayer, Tailwind CSS, static export.
- Content model: posts, projects, pages stored in content/.
- Target: personal portfolio and knowledge hub.

## What is working well
- Clean separation between content and UI via Contentlayer in [contentlayer.config.ts](contentlayer.config.ts).
- App router structure is tidy and easy to extend in [src/app](src/app).
- Static export config suits GitHub Pages in [next.config.js](next.config.js).
- Tailwind tokens and theme setup are consistent in [tailwind.config.js](tailwind.config.js).

## Risks and issues to fix
- Version mismatch: `next` is `^13.5.6` but `@next/mdx` and `eslint-config-next` are 14.x in [package.json](package.json). This can cause build or lint incompatibilities.
- React version skew: `react` and `react-dom` are `^18.3.1`, which is newer than what Next 13.5.x expects. This can cause subtle runtime or build issues.
- Unused import: `useState` is imported but not used in [src/app/layout.tsx](src/app/layout.tsx).
- React key warnings: list rendering uses index keys and a fragment without a key in [src/app/page.tsx](src/app/page.tsx).
- Metadata host mismatch: `metadataBase` is set to `http://mateszkom.com` while `WEBSITE_HOST_URL` points to GitHub Pages in [src/app/layout.tsx](src/app/layout.tsx) and [src/lib/constants.ts](src/lib/constants.ts). This can create wrong canonical and OG links.

## Likely outdated packages
These are probably behind current stable releases, but verify with `npm outdated`:
- `tailwindcss` 3.3.3
- `autoprefixer` 10.4.15
- `typescript` 5.2.2
- `next-themes` 0.2.1
- `@types/*` packages

## Suggested technical next steps
1. Align Next stack versions ( move all to newest next version ).
2. Run `npm outdated` and `npm audit` to confirm update and security needs.
3. Fix key warnings in lists and remove unused imports.
4. Decide on the canonical site URL and update both `metadataBase` and `WEBSITE_HOST_URL` consistently.

## Optional improvements
- Add simple smoke tests or a content build check (contentlayer + MDX).
- Add a small accessibility pass for headings and link states.

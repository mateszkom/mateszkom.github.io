# Content Structure Ideas

## Goals

- Expand beyond UX/UI and graphics into programming, RPA, AI automation, scripting, and citizen development.
- Make browsing easy by topic, not just chronology.
- Keep the site simple to maintain with MDX and a lightweight information architecture.

## Suggested information architecture

- Home
  - Short intro + quick links to core domains
  - Latest items across all domains
- Work (case studies)
  - UX/UI case studies
  - Product or process design
  - Research notes
- Visual (graphic design)
  - Branding, identity, marketing assets
- Build (programming)
  - Apps, tools, scripts
  - Engineering writeups
- Automate (RPA and AI)
  - Automations, pipelines, bots
  - Citizen dev and low-code
- Notes
  - Short posts, tips, experiments
- About / Resume

## Content types

- Case study (long form)
- Project (portfolio item)
- Note (short insight)
- Guide (how-to)
- Lab (experiment or prototype)

## Tagging model

- Primary domain tag: `ux`, `graphic`, `code`, `rpa`, `ai`, `citizen-dev`
- Secondary tags: `research`, `prototype`, `automation`, `scripting`, `tooling`
- Tech tags: `nextjs`, `python`, `power-automate`, `uipath`, `openai`

## Navigation patterns

- Keep top nav small (4 to 6 items), and use filters for depth.

## Page layout ideas

- Domain landing pages with a short manifesto and featured work.
- A unified feed with filters (domain, type, year).
- Project pages with an optional "Problem / Process / Outcome" block.

## Next steps to implement

1. Extend the Contentlayer schema to include `type`, `domain`, and `tags`.
2. Add a filter UI for posts and projects (query params or client state).
3. Create landing pages for each domain with featured items.

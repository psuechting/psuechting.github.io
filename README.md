# psuechting.github.io

Personal website of Peter Suechting, Ph.D. Built with [Astro](https://astro.build) and deployed to GitHub Pages by GitHub Actions on every push to `main`.

## Editing content

Most content is plain data — edit these files, no code required:

| What | File |
|---|---|
| Name, title, emails, social links, short "About" blurb | `src/data/profile.ts` |
| Full bio | `src/content/bio/full.md` |
| Jobs (`end: present` for a current role) | `src/data/work.yaml` |
| Degrees | `src/data/education.yaml` |
| Skills | `src/data/skills.yaml` |
| Research interests | `src/data/interests.yaml` |
| Publications | `src/data/publications.yaml` |
| Fellowships & awards | `src/data/awards.yaml` |
| Research experience | `src/data/research.yaml` |
| Professional service | `src/data/service.yaml` |

Every entry is checked against the schema in `src/content.config.ts` when the site builds, so a typo in a field name stops the build with an error instead of silently breaking the page.

## Running locally

Requires Node 22.12+.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # type-check + build to dist/
npm run preview  # serve the built site
```

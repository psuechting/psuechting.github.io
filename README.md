# psuechting.github.io

Personal website of Peter Suechting, Ph.D. Built with [Astro](https://astro.build) and deployed to GitHub Pages by GitHub Actions on every push to `main`.

## Editing content

Most content is plain data — edit these files, no code required:

| What | File |
|---|---|
| Name, title, emails, social links, short "About" blurb | `src/data/profile.ts` |
| Full bio | `src/content/bio/full.md` |
| Dissertation (home page card + `/research/dissertation/`) | `src/content/dissertation/full-green-ahead.md` |
| Projects (one Markdown file each; `draft: true` hides it) | `src/content/projects/` |
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
npm run build:cv # print /cv/ to dist/peter-suechting-cv.pdf (after build)
npm run preview  # serve the built site
```

The CV at `/cv/` and the PDF are generated from the same data files as the home page, so there's nothing separate to keep up to date. `build:cv` needs Playwright's Chromium once: `npx playwright install chromium`. In local dev, the "Download CV" link 404s until you run `build` + `build:cv`; the deploy workflow does this automatically.

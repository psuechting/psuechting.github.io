# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two primary audiences, served equally:

- **Employers and hiring managers** in climate, energy, data, organizing, and consulting. They arrive from a resume, LinkedIn, or a referral and are deciding whether to reach out.
- **Academic search committees and research employers** evaluating a faculty, postdoc, or research hire. They want the research program, dissertation, publications, and a CV.

Both audiences do a fast credential scan first (degree, employers, skills), then stay to read the research, then make contact.

## Product Purpose

The professional website of Peter Suechting, Ph.D. (Environmental Sciences, Studies, and Policy, University of Oregon, conferred August 17, 2026). It presents one person's record across two careers at once: applied data and information-systems work for labor unions and climate organizations, and social-scientific research on energy transitions, climate policy, and social movements.

Success is any of these visitor actions, in rough priority order:

1. Email or LinkedIn contact.
2. Downloading the CV.
3. Reading the research in depth (dissertation page, publications, research program).
4. Verifying credentials in under a minute.

## Positioning

The site's distinctive claim is the pairing itself: a Ph.D. researcher who also builds and runs production information systems for unions and advocacy organizations. The tagline in `src/data/profile.ts` states it directly. The signature research artifact is the dissertation, "Organizational Structure, Environmental Justice, and the Geography of the Green Transition in the U.S. Power Sector," three analyses of federal data covering more than 13,000 U.S. power plants, published open access on ProQuest.

## Operating Context

- Astro static site, deployed to GitHub Pages by GitHub Actions on every push to `main`. The deploy workflow also builds the CV PDF.
- Changes ship through short-lived branches and pull requests merged into `main`; `main` is never edited directly.
- All content is data: YAML files in `src/data/`, Markdown collections in `src/content/`, and `src/data/profile.ts`. Every entry is validated against `src/content.config.ts` at build time. Components in `src/components/` render that data; all styling lives in `src/styles/global.css`.
- Pages: home, `/about/` (full bio), `/research/dissertation/`, `/projects/<id>/` (two published), `/cv/` (printable, also rendered to PDF), `/writing/` with tag pages and RSS (one draft post, section hidden until a post is published), and a 404.
- Light and dark themes: system preference by default, with a toggle in the nav that persists to local storage.
- Fonts are IBM Plex Sans (headings and body) and IBM Plex Mono (dates, labels, chips) from Google Fonts. Palette: cool paper `#F5F8F7`, ink `#0E1F2B`, forest-green accent `#1B7A5A` (mint `#4FC995` in dark mode); every text/background pair meets 4.5:1. Icons are inline SVG; there is no icon library.
- The `dissertation_project/` folder at the repo root is private Notion working files. It is not site content and must never be surfaced, linked, or used as evidence on the published site.

## Capabilities and Constraints

- **Status:** Ph.D. completed and conferred. All copy already reflects this; "candidate" framing anywhere is a regression.
- **Current roles:** Data Specialist at AFT (since October 2025) and Funding Research Analyst at Climate Finance Solutions (since October 2023). Both show on the "Now" line in the header automatically from `work.yaml`.
- Two email addresses (academic and personal) are displayed, obfuscated against harvesters by `Email.astro`; keep both.
- The CV page and PDF are generated from the same data as the home page; there is no separate CV to maintain.
- **Undecided:** when the Writing section goes live (depends on publishing a first post).

## Brand Commitments

- Name: Peter Suechting, with the honorific "Ph.D." after the name in the header and page titles.
- Voice in existing copy is first-person, plainspoken, and specific; the short bio names "humility, and humor" as values. Job descriptions are written as what he did, not what the employer does.
- No logo, headshot, or photographic identity. The link-preview image is generated from name, title, and tagline by `scripts/build-og-image.mjs`.

## Evidence on Hand

- Dissertation: full abstract, three chapter summaries, committee, data sources, ProQuest link and number, all in `src/content/dissertation/dissertation.md`.
- One peer-reviewed co-authored chapter (Routledge handbook, 2022) with URL, in `src/data/publications.yaml`.
- Two project write-ups with outcomes: AFT Oregon data systems and the Climate Finance Solutions funding intelligence platform (nearly 10,000 curated opportunities), in `src/content/projects/`.
- Three fellowships and awards with institutional URLs; two research-assistant appointments with linked NSF award and publication; one professional service role.
- Generated CV at `/cv/` and `/peter-suechting-cv.pdf`.
- Absent: headshot, testimonials, teaching evaluations, press, published writing. Do not fabricate any of these.

## Product Principles

1. **Both careers, one person.** Applied systems work and academic research get equal standing; neither is framed as a fallback from the other.
2. **Scan first, then depth.** Credentials, current roles, and contact must be verifiable in the first viewport; the research rewards those who keep reading.
3. **Every claim is sourced.** Degrees, awards, publications, projects, and the dissertation link to the institution, DOI, or ProQuest. Nothing on the page is unverifiable.
4. **One source of truth.** Content lives in data files and is rendered everywhere it appears (home, CV, PDF, link preview). Never duplicate a fact into markup or styles.
5. **Current, not aspirational.** Dates, titles, and status reflect today.

## Accessibility & Inclusion

WCAG 2.1 AA is the baseline in both themes: 4.5:1 contrast for body text, keyboard-operable controls with visible focus, a skip link, real heading structure, and reduced-motion support. No stricter institutional requirement was established.

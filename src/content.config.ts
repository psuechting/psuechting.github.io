import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Each YAML file in src/data is a list of entries. Every entry needs a unique `id`.
// The build fails with a clear error if a field is missing or misspelled.

const work = defineCollection({
	loader: file('src/data/work.yaml'),
	schema: z.object({
		employer: z.string(),
		employerUrl: z.url(),
		title: z.string(),
		// YYYY-MM, or YYYY when only the year is known.
		start: z.string().regex(/^\d{4}(-\d{2})?$/, 'Use YYYY-MM or YYYY'),
		// YYYY-MM, or "present" for a current role. Omit if unknown (only the start date is shown).
		end: z.union([z.string().regex(/^\d{4}(-\d{2})?$/, 'Use YYYY-MM or YYYY'), z.literal('present')]).optional(),
		location: z.string(),
		description: z.string(),
		// Tools used in this role (shown as chips on the timeline and a line on the CV).
		tools: z.array(z.string()).default([]),
		// Résumé bullets for this role (1–3). Not shown on the timeline.
		bullets: z.array(z.string()).default([]),
	}),
});

const education = defineCollection({
	loader: file('src/data/education.yaml'),
	schema: z.object({
		degree: z.string(),
		institution: z.string(),
		location: z.string(),
		year: z.number(),
		honors: z.string().optional(),
		thesis: z.string().optional(),
	}),
});

const skills = defineCollection({
	loader: file('src/data/skills.yaml'),
	schema: z.object({
		order: z.number(),
		years: z.string().optional(),
		title: z.string(),
		items: z.array(z.string()),
	}),
});

const interests = defineCollection({
	loader: file('src/data/interests.yaml'),
	schema: z.object({
		order: z.number(),
		topic: z.string(),
		items: z.array(z.string()),
	}),
});

const publications = defineCollection({
	loader: file('src/data/publications.yaml'),
	schema: z.object({
		year: z.number(),
		citation: z.string(),
		venue: z.string(),
		url: z.url().optional(),
		// One-line form for the résumé.
		short: z.string().optional(),
	}),
});

const awards = defineCollection({
	loader: file('src/data/awards.yaml'),
	schema: z.object({
		order: z.number(),
		years: z.string(),
		title: z.string(),
		organization: z.string(),
		url: z.url(),
		description: z.string(),
		// Compact form for the résumé, e.g. "Amherst Memorial Fellowship (2019–23)".
		resumeLabel: z.string().optional(),
	}),
});

const research = defineCollection({
	loader: file('src/data/research.yaml'),
	schema: z.object({
		order: z.number(),
		duration: z.string(),
		department: z.string(),
		pi: z.string(),
		role: z.string(),
		projects: z.array(z.object({ name: z.string(), url: z.url() })),
		// One-line topic summary for the résumé.
		summary: z.string().optional(),
		// Fuller description for the CV.
		details: z.string().optional(),
	}),
});

const teaching = defineCollection({
	loader: file('src/data/teaching.yaml'),
	schema: z.object({
		order: z.number(),
		years: z.string(),
		role: z.string(),
		department: z.string(),
		description: z.string(),
		// Course titles, once compiled.
		courses: z.array(z.string()).default([]),
	}),
});

const service = defineCollection({
	loader: file('src/data/service.yaml'),
	schema: z.object({
		order: z.number(),
		duration: z.string(),
		organization: z.string(),
		role: z.string(),
		// Résumé rendering: compact title/years and bullets.
		resumeTitle: z.string().optional(),
		resumeYears: z.string().optional(),
		bullets: z.array(z.string()).default([]),
	}),
});

const bio = defineCollection({
	loader: glob({ base: './src/content/bio', pattern: '*.md' }),
	schema: z.object({ title: z.string() }),
});

const dissertation = defineCollection({
	loader: glob({ base: './src/content/dissertation', pattern: '*.md' }),
	schema: z.object({
		title: z.string(),
		degree: z.string(),
		institution: z.string(),
		conferred: z.coerce.date(),
		// Short teaser for the home-page card.
		summary: z.string(),
		committee: z.array(z.object({ name: z.string(), role: z.string().optional() })),
		chapters: z.array(z.object({ title: z.string(), subtitle: z.string(), finding: z.string() })),
		data: z.array(z.string()),
		// Link to the full text (ProQuest).
		url: z.url().optional(),
		proquestNumber: z.string().optional(),
	}),
});

// Projects with `draft: true` are skipped everywhere until they're ready.
const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '*.md' }),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		organization: z.string(),
		role: z.string(),
		years: z.string(),
		tools: z.array(z.string()).default([]),
		url: z.url().optional(),
		order: z.number(),
		draft: z.boolean().default(false),
	}),
});

// Writing. One Markdown file per post in src/content/posts; the filename is the URL slug.
// Posts with `draft: true` are skipped everywhere until they're ready.
const posts = defineCollection({
	loader: glob({ base: './src/content/posts', pattern: '*.md' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		updated: z.coerce.date().optional(),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
	}),
});

export const collections = {
	posts,
	work,
	education,
	skills,
	interests,
	publications,
	awards,
	research,
	service,
	teaching,
	bio,
	dissertation,
	projects,
};

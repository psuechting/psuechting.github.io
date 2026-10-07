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
		start: z.string().regex(/^\d{4}-\d{2}$/, 'Use YYYY-MM'),
		// YYYY-MM, or "present" for a current role. Omit if unknown (only the start date is shown).
		end: z.union([z.string().regex(/^\d{4}-\d{2}$/, 'Use YYYY-MM'), z.literal('present')]).optional(),
		location: z.string(),
		description: z.string(),
	}),
});

const education = defineCollection({
	loader: file('src/data/education.yaml'),
	schema: z.object({
		degree: z.string(),
		institution: z.string(),
		location: z.string(),
		year: z.number(),
	}),
});

const skills = defineCollection({
	loader: file('src/data/skills.yaml'),
	schema: z.object({
		order: z.number(),
		years: z.string(),
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
	}),
});

const service = defineCollection({
	loader: file('src/data/service.yaml'),
	schema: z.object({
		order: z.number(),
		duration: z.string(),
		organization: z.string(),
		role: z.string(),
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
		// Link to the full text (e.g. UO Scholars' Bank or ProQuest) once it's available.
		url: z.url().optional(),
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

export const collections = {
	work,
	education,
	skills,
	interests,
	publications,
	awards,
	research,
	service,
	bio,
	dissertation,
	projects,
};

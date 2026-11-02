// Résumé-only prose. Everything else on /resume/ comes from the shared data files
// (work.yaml bullets, skills.yaml, research/publications/awards/service.yaml).
// Drafting surface: the "Résumé — site master" page in Notion; mirror changes here.
// The printed résumé fits one Letter page with about a line to spare: after editing, run
// `npm run build && npm run build:cv` and confirm dist/peter-suechting-resume.pdf is 1 page.
export const resume = {
	summary:
		"Research and data specialist for labor unions and climate organizations. Ph.D. political scientist (University of Oregon, 2026) who builds the information systems member organizations run on and conducts quantitative research on energy transitions, climate policy and social movements. Seven years designing data systems for unions and advocacy groups; nine years of applied research on the U.S. power sector.",
	dissertationBullets: [
		'Built a plant-level panel of the U.S. power fleet (13,000+ plants, 2009–2023) in R and DuckDB from federal generator, emissions and census data; estimated how firm structure, ownership and community demographics shape emissions-control adoption and operation, and where transition investment lands.',
	],
} as const;

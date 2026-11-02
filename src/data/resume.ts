// Résumé-only prose. Everything else on /resume/ comes from the shared data files
// (work.yaml bullets, skills.yaml, research/publications/awards/service.yaml).
// Drafting surface: the "Résumé — site master" page in Notion; mirror changes here.
// The printed résumé fits one Letter page with about a line to spare: after editing, run
// `npm run build && npm run build:cv` and confirm dist/peter-suechting-resume.pdf is 1 page.
export const resume = {
	summary:
		"Research and data specialist for labor unions and climate organizations. Ph.D. political scientist (University of Oregon, 2026) who builds and runs the information systems that member organizations depend on, and conducts quantitative research on energy transitions, climate policy, and social movements. Seven years designing data systems for unions and advocacy organizations; nine years of applied research on the U.S. power sector.",
	dissertationBullets: [
		'Built a plant-level panel of the U.S. power fleet (EIA-860/923, EPA eGRID and CEMS, ACS; 13,000+ plants, 2009–2023) in R and DuckDB; classified facilities by technology, ownership and regulatory regime.',
		'Estimated how firm structure, ownership and community demographics shape the adoption and operation of emissions controls, and where transition investment lands geographically.',
	],
} as const;

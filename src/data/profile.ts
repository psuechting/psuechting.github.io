// Site-wide personal details. Used by the page header, meta tags, and (later) the CV.
export const profile = {
	name: 'Peter Suechting',
	honorific: 'Ph.D.',
	title: 'Environmental Sciences, Studies & Policy · University of Oregon',
	// One-sentence positioning statement shown under the name.
	tagline:
		'I study how the energy transition redistributes environmental burdens, and I build the data systems that organizers and climate organizations run on.',
	cvPath: '/peter-suechting-cv.pdf',
	description:
		'Peter Suechting, Ph.D. — researcher, data systems builder, and analyst working on energy transitions, climate policy, and social movements.',
	about:
		'Researcher, data wrangler, & analyst specializing in informational systems design, development, & implementation for mission-focused organizations in the climate space. Experienced manager & thought leader in energy, climate, infrastructure, & industrial policy. Committed to delivering results with exceptional communication, collaboration, humility, and humor. Passionate about environmental issues, media, culture, & political economy.',
	emails: [
		{ label: 'Academic', address: 'psuechti@uoregon.edu' },
		{ label: 'Personal', address: 'psuechting@gmail.com' },
	],
	social: [
		{ platform: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/peter-suechting-05a738a5' },
		{ platform: 'github', label: 'GitHub', url: 'https://github.com/psuechting' },
	],
} as const;

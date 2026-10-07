import { getCollection } from 'astro:content';

/** Published (non-draft) projects, in display order. */
export async function getPublishedProjects() {
	const projects = await getCollection('projects', ({ data }) => !data.draft);
	return projects.sort((a, b) => a.data.order - b.data.order);
}

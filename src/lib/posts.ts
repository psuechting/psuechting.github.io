import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

/** Published (non-draft) posts, newest first. */
export async function getPublishedPosts(): Promise<Post[]> {
	const posts = await getCollection('posts', ({ data }) => !data.draft);
	return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** Every tag used by a published post, with its posts, alphabetical. */
export async function getTags(): Promise<Map<string, Post[]>> {
	const tags = new Map<string, Post[]>();
	for (const post of await getPublishedPosts()) {
		for (const tag of post.data.tags) tags.set(tag, [...(tags.get(tag) ?? []), post]);
	}
	return new Map([...tags].sort(([a], [b]) => a.localeCompare(b)));
}

/** "3 min read", from the Markdown body at ~220 words per minute. */
export function readingTime(body = ''): string {
	const words = body.trim().split(/\s+/).filter(Boolean).length;
	return `${Math.max(1, Math.round(words / 220))} min read`;
}

export function formatDate(date: Date): string {
	return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
}

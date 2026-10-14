import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { profile } from '../data/profile';
import { getPublishedPosts } from '../lib/posts';

export async function GET(context: APIContext) {
	const posts = await getPublishedPosts();
	return rss({
		title: `${profile.name} — Writing`,
		description: profile.description,
		site: context.site!,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.date,
			link: `/writing/${post.id}/`,
			categories: post.data.tags,
		})),
	});
}

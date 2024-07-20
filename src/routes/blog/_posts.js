import { dev } from '$app/environment';
import { basename } from 'path';
import { clickbaity_outlines } from '../../lib/clickbait';

export async function getPosts() {
	const modules = import.meta.glob('../../posts/*.svx');

	const sampled_clickbaity_outlines = clickbaity_outlines
		.sort(() => 0.5 - Math.random())
		.slice(0, 5);
	let posts = await Promise.all(
		Object.entries(modules).map(async (entry) => {
			const [filename, module] = entry;
			const { metadata } = await module(); // Change here

			return {
				title: metadata.title,
				published: metadata.published ?? false,
				date: new Date(metadata.date),
				slug: basename(filename, '.svx'),
				outline:
					metadata.outline ?? sampled_clickbaity_outlines.length
						? sampled_clickbaity_outlines.pop()
						: 'No outline provided'
			};
		})
	);
	// Sort posts by descending date
	posts = posts.sort((a, b) => (a.date > b.date ? -1 : 1));
	if (!dev) posts = posts.filter((post) => post.published);

	return posts;
}

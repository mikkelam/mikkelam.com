import { dev } from '$app/environment';
import { basename } from 'path';

export async function getPosts() {
	const modules = import.meta.glob('../../posts/*.svx');

	let posts = await Promise.all(
		Object.entries(modules).map(async (entry) => {
			const [filename, module] = entry;
			const { metadata } = await module(); // Change here

			return {
				title: metadata.title,
				published: metadata.published ?? false,
				date: new Date(metadata.date),
				slug: basename(filename, '.svx'),
				outline: metadata.outline ?? 'No outline provided'
			};
		})
	);
	// Sort posts by descending date
	posts = posts.sort((a, b) => (a.date > b.date ? -1 : 1));
	if (!dev) posts = posts.filter((post) => post.published);

	return posts;
}

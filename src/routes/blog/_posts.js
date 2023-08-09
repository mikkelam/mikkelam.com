import { dev } from '$app/environment';
import { basename } from 'path';

export function getPosts() {
	const modules = import.meta.globEager('./posts/*.svx');

	let posts = Object.entries(modules).flatMap((entry) => {
		const [filename, module] = entry;

		const { metadata } = module;

		return {
			title: metadata.title,
			published: metadata.published ?? false,
			date: new Date(metadata.date),
			slug: basename(filename, '.svx'),
			outline: metadata.outline ?? "Author was, lazy. Click to read"
		};
	});
	// Sort posts by descending date
	posts = posts.sort((a, b) => (a.date > b.date ? -1 : 1));
	if (!dev)
		posts = posts.filter((post) => post.published);

	return posts;
}



import { dev } from '$app/env';
import { basename } from 'path';

export function getPosts() {
	// Import all .svx files in the directory
	const modules = import.meta.globEager('./posts/*.svx');

	// Run a map over each module

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

const posts = getPosts();
export default posts;

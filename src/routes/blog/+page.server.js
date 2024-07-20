import { getPosts } from './_posts';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const posts = await getPosts();
	return {
		posts
	};
}

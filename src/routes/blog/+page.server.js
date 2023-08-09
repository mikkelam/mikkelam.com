import { getPosts } from './_posts';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const posts = await getPosts();
	return {
		posts
	};
}

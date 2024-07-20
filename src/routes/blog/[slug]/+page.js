import { error } from '@sveltejs/kit';

export async function load({ params }) {
	let post;
	try {
		post = await import(`../../../posts/${params.slug}.svx`);
	} catch {
		error(404, {
			message: 'Not found'
		});
	}

	return {
		component: post.default,
		metadata: post.metadata
	};
}
export const prerender = true;
export const ssr = false;

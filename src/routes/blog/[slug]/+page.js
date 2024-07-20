export async function load({ params }) {
	const post = await import(`../../../posts/${params.slug}.svx`);
	return {
		component: post.default,
		metadata: post.metadata
	};
}
export const prerender = true;

export async function load({ params }) {
	console.log('hallooooooooooooooooooooooooo');
	const post = await import(`../../../posts/${params.slug}.svx`);
	console.log(post);
	return {
		component: post.default,
		metadata: post.metadata
	};
}
export const prerender = true;

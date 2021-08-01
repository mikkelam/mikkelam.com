import posts from '../_posts';

export async function get({ params }) {
	const { slug } = params;
	const post = posts.find((post) => post.slug === slug);

	
	if (post) {
		return {
			status: 200,
			headers: {},
			body: JSON.stringify(post)
		};
	}
}

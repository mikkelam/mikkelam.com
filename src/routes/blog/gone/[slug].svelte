<script context="module">

	export async function load({ page, fetch, slug }) {
		const url = `/blog/${page.params.slug}.json`;
		const res = await fetch(url);
		
		const json = await res.json();

		return {
			props: {
				post: json

			}
		};
	}
</script>

<script>
	export let post;
</script>

<h1>{post.title}</h1>



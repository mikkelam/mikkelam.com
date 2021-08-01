<script context="module">
	export async function load({ page, fetch }) {
		const posts = await fetch('/blog/posts.json');
		const json = await posts.json();

		json.forEach((el) => (el.date = new Date(el.date)));
		return {
			props: {
				posts: json
			}
		};
	}
</script>

<script>
	import Body from '$lib/Content.svelte';

	export let posts = [];
</script>

<Body>
	<div class="p-4">
		{#each posts as { title, slug, date }}
			<div class="mb-4 p-2 bg-gray-200 rounded-md">
				<div>
					<a class="text-blue-500 space-y-3" href="blog/posts/{slug}">
						<h1 class="text-2xl">
							{title}
						</h1>
					</a>
					<p class="text-xs text-gray-500">{date.toLocaleDateString()}</p>
				</div>
			</div>
		{/each}
	</div>
</Body>

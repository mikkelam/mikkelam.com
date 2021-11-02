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
	import Content from '$lib/Content.svelte';

	export let posts = [];
</script>

<Content>
	<div class="p-2 w-3/4 ml-auto mr-auto">
		{#each posts as { title, slug, date, outline }}
			<div class="mb-4 p-2">
				<div>
					<a class=" space-y-3" href="blog/posts/{slug}">
						<div>
							<h1 class="text-2xl  font-bold">
								{title}
							</h1>
							<time class="text-xs block text-gray-500" datetime={date}
								>{new Date(date).toLocaleDateString()}</time
							>
							<p class="text-sm">{outline}</p>
						</div>
					</a>
				</div>
			</div>
			<div class="h-1 w-full bg-gray-700 opacity-5" />
		{/each}
	</div>
</Content>

<style>

	a{
		@apply text-black !important;
	}
</style>

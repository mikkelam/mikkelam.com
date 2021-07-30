<script context="module">
	export async function load({ page, fetch }) {
		const posts = await fetch('/blog/posts.json');
		console.log(posts);
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
	export let posts = [];
</script>

<ul class="list-none">
	{#each posts as { title, slug, date }}
		<li class="list-none">
			<a class="text-blue-500 space-y-3" rel="prefetch" href="blog/{slug}">
				<h2>
					{title}
				</h2>
				<p class="text-xs text-gray-500">{date.toLocaleDateString()}</p>
			</a>
		</li>
	{/each}
</ul>

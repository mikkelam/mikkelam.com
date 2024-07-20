<script>
	import Content from '$lib/Content.svelte';
	export let data;

	export let posts = data.posts;

	posts.forEach((el) => {
		el.date = new Date(el.date);
	});
</script>

<Content>
	<div class="ml-auto mr-auto p-2 lg:w-3/4">
		{#each posts as { title, slug, date, outline, published }}
			<div class="mb-4 p-2">
				<div>
					<a data-sveltekit-preload-data class="link space-y-3" href="/blog/{slug}">
						<div>
							<h1 class="text-2xl font-bold">
								{title}
								{#if !published}
									<span class="text-green-500">Unpublished</span>
								{/if}
							</h1>
							<time class="block text-xs text-gray-500" datetime={date}
								>{date.toLocaleDateString()}</time
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

<style lang="postcss">
	a {
		@apply text-black !important;
	}
</style>

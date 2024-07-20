<script context="module">
	import Content from '$lib/Content.svelte';
</script>

<script>
	export let title;
	export let date;
	export let outline;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={outline} />
	<head>
		<link href="/prism-vsc-dark-plus.css" rel="stylesheet" />
	</head>
</svelte:head>

<Content>
	<div class="my-8 px-2">
		<div class="mb-12 w-3/4">
			<div>
				<h1 class="text-3xl">{title}</h1>

				<p class="mt-2 text-gray-600">
					Posted
					<time datetime={date}>{new Date(date).toLocaleDateString()}</time>
				</p>
			</div>
			<div class="mt-2 h-2 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500" />
		</div>

		<slot />
	</div>
</Content>

<style>
	p {
		@apply mb-2;
	}
	h1 {
		@apply text-2xl;
	}
	h2 {
		@apply text-xl;
	}

	h3 {
		@apply text-lg;
	}
</style>

<script>
	import { page } from '$app/stores';
	console.log($page);
</script>

<main class="flex h-screen items-center justify-center">
	<div class="text-center">
		<p class="mb-4 text-xl">{$page.status} {$page.error.message}</p>
		<a class="link mt-4 block text-blue-400 hover:opacity-70" href="/">Back to safety 🏠</a>
	</div>
</main>

<style lang="postcss">
	.link {
		@apply text-blue-400 hover:opacity-70;
	}
	main {
		@apply flex h-screen items-center justify-center;
	}
	h1 {
		@apply mb-4 text-6xl;
	}
	p {
		@apply mb-4 text-xl;
	}
</style>

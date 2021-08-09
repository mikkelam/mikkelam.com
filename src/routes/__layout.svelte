<script>
	import 'virtual:windi.css';
	import Sidebar from '$lib/Sidebar.svelte';
	import { browser } from '$app/env';
	import Content from '$lib/Content.svelte';
	if (browser) import('virtual:windi-devtools');
</script>

<Sidebar />
<main class="lg:ml-74 h-screen overflow-y-auto">
	<Content>
		<slot />
	</Content>
</main>

<style>
	@layer base {
		a {
			@apply  hover:opacity-50 mr-auto;
		}

		p,
		h1,
		h2,
		h3,
		h4,
		h5,
		h6,
		span {
			@apply font-mono;
		}
		h1 {
			@apply text-2xl;
		}
		h2 {
			@apply text-xl;
		}
	}
</style>

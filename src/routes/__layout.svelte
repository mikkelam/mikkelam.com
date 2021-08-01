<script>
	import 'virtual:windi.css';
	import Sidebar from '$lib/Sidebar.svelte';
	import { browser } from '$app/env';
	import Content from '$lib/Content.svelte';
	if (browser) import('virtual:windi-devtools');
</script>

<Sidebar />
<main class="ml-74 h-screen overflow-y-auto">
	<Content>
		<slot />
	</Content>
</main>

<style>
	a {
		@apply text-blue-gray-200 hover:opacity-50 mr-auto;
	}
</style>

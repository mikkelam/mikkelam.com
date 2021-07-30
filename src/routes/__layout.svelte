<script>
	import 'virtual:windi.css';
	import Sidebar from '$lib/Sidebar.svelte';
	import { browser } from '$app/env';
	if (browser) import('virtual:windi-devtools');
</script>

<Sidebar />
<main class="ml-60"> 
	<slot />
</main>


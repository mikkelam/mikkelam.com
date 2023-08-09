<script>
	import '../app.css';
	import Sidebar from '$lib/Sidebar.svelte';
	import Content from '$lib/Content.svelte';
</script>

<Sidebar />
<main class="lg:ml-74 h-screen overflow-y-auto">
	<Content>
		<slot />
	</Content>
</main>



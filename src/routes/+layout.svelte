<script>
	import '../app.css';
	import Sidebar from '$lib/Sidebar.svelte';
	import Content from '$lib/Content.svelte';
</script>

<div class="flex h-screen flex-col lg:flex-row">
	<Sidebar />
	<main class="mt-0 flex-1 overflow-y-auto">
		<Content>
			<slot />
		</Content>
	</main>
</div>

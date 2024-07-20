<script>
	import '../app.css';
	import Sidebar from '$lib/Sidebar.svelte';
	import Content from '$lib/Content.svelte';
</script>

<div class="flex flex-col lg:min-h-screen lg:flex-row">
	<Sidebar />
	<main class="mt-0 flex-1">
		<Content>
			<slot />
		</Content>
	</main>
</div>

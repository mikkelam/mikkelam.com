<script>
	export let data;
	$: component = data.component;
</script>

<p class="text-2xl font-bold">{data.metadata.title}</p>

<svelte:component this={component} />

<script>
	export let data;
	$: component = data.component;
</script>

<svelte:component this={component} />

<script context="module">
	import { browser } from '$app/env';

	import { goto } from '$app/navigation';

	if (browser) goto('/blog/');
</script>

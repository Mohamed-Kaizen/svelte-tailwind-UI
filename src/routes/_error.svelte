<script>
	export let status
	export let error

	const dev = process.env.NODE_ENV === "development"
</script>

<svelte:head>
	<title>{status} | svelte tailwind UI</title>
</svelte:head>

{status}
{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}

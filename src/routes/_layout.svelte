<script>
	export let segment
</script>

{#if segment === 'meetup'}
	<slot />
{:else if segment === 'inbox'}
	<slot />
{:else}
	<slot />
{/if}

<script>
	export let segment
</script>

{#if segment === 'meetup'}
	<slot />
{:else}
	<slot />
{/if}

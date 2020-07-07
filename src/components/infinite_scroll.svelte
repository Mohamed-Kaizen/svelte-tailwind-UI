<script>
	import {onMount} from "svelte"
	export let callball
	let inf_scroll
	if (typeof window !== "undefined") {
		onMount(() => {
			new IntersectionObserver((enteries) => {
				enteries.forEach((entery) => {
					if (entery.intersectionRatio > 0) {
						callball()
					}
				})
			}).observe(inf_scroll)
		})
	}
</script>

<slot name="content" />
<div bind:this="{inf_scroll}"></div>

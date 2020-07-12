<script>
	const people_images = ["1.png", "1.png", "1.png", "1.png", "1.png"]
</script>

<div class="flex items-center sm:ml-6 ">
	{#each people_images as people_image, index}
		<span class="-ml-2 rounded-full border-2 border-white">
			<img
				class="h-6 w-6 rounded-full object-cover"
				src="{people_image}"
				alt="{index}" />
		</span>
	{/each}
</div>

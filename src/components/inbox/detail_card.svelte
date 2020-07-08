<script>
	export let username, message_type, date, image, message
</script>

<article class="mb-3 px-10 pt-6 pb-8 bg-white rounded-lg shadow">
	<div class="flex items-center justify-between">
		<p class="text-lg font-semibold">
			<span class="text-gray-900">{username}</span>
			<span class="text-gray-600">{message_type}</span>
		</p>
		<div class="flex items-center">
			<span class="text-sm text-gray-700">{date}</span>
			<img
				class="ml-5 h-10 w-10 rounded-full object-cover"
				src="{image}"
				alt="madara profile" />
		</div>
	</div>
	<div class="mt-6 text-sm text-gray-800">
		<p>{message}</p>
	</div>
</article>

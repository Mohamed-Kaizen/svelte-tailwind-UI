<script>
	export let title,
		date,
		username,
		overview,
		path,
		unreaded = false,
		active = false
</script>

<div class="border-b">
	<a
		href="{path}"
		class="block px-6 pt-3 pb-4 {active ? 'bg-gray-100' : 'bg-white'}
		{unreaded ? 'border-l-4 border-blue-300' : ''}
		">
		<div class="flex justify-between">
			<span class="text-sm font-semibold text-gray-900">{username}</span>
			<span class="text-sm text-gray-600">{date}</span>
		</div>
		<p class="text-sm text-gray-900">{title}</p>
		<p class="mt-2 text-sm text-gray-600">{overview}</p>
	</a>
</div>

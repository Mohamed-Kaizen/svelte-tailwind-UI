<script>
	export let indexo
</script>

<div
	class="border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 ">
	<div class="flex p-4">

		<div class="w-16 mr-4 text-gray-600 dark:text-gray-400">
			<a href="/">{indexo + 6}:00PM</a>
		</div>

		<div>
			<div
				class="uppercase font-bold text-sm text-gray-700
				dark:text-gray-300">
				<a href="/">Japan python users group</a>
			</div>

			<div class="font-bold text-gray-800 dark:text-gray-200 text-xl">
				<a href="/">Pycon 2021</a>
			</div>

			<div
				class="text-gray-600 dark:text-gray-400 flex flex-col lg:flex-row">
				<span class="mr-2">31 python coder going</span>
				<span class="text-red-400 dark:text-red-700 mr-2">&middot;</span>
				<span class="text-red-400 dark:text-red-700">
					{indexo * 2} spots left
				</span>
			</div>
		</div>

	</div>
</div>

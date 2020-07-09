<script>
	export let index
</script>

<div
	class="flex w-full items-center justify-between bg-white dark:bg-gray-800 {index === 0 ? 'border-l-4 border-green-500 dark:border-green-300' : ''}
	px-8 py-6">
	<!-- card -->
	<div class="flex">
		<img
			class="h-12 w-12 rounded-full object-cover"
			src="/infamous.jpg"
			alt="infamous" />

		<div class="flex flex-col ml-6">
			<span class="text-lg font-bold">Amazon</span>
			<div class="mt-4 flex">
				<div class="flex">
					<svg
						class="h-5 w-5 fill-current dark:text-gray-300"
						viewBox="0 0 24 24">
						<path
							d="M12 4a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0
							014-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4
							8-4z"></path>
					</svg>
					<span
						class="ml-2 text-sm text-gray-600 dark:text-gray-300
						capitalize">
						Niccolo perra
					</span>
				</div>

				<div class="flex ml-6">
					<svg
						class="h-5 w-5 fill-current dark:text-gray-300"
						viewBox="0 0 24 24">
						<path
							d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2
							2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0
							00-2-2h-1V1m-1 11h-5v5h5v-5z"></path>
					</svg>
					<span
						class="ml-2 text-sm text-gray-600 dark:text-gray-300
						capitalize">
						13 aug 2016
					</span>
				</div>

				<div class="flex ml-6">
					<svg
						class="h-5 w-5 fill-current dark:text-gray-300"
						viewBox="0 0 24 24">
						<path
							d="M13 2.05v2.02c3.95.49 7 3.85 7 7.93 0 3.21-1.92
							6-4.72 7.28L13 17v5h5l-1.22-1.22C19.91 19.07 22 15.76
							22 12c0-5.18-3.95-9.45-9-9.95M11
							2c-1.95.2-3.8.96-5.32 2.21L7.1 5.63A8.195 8.195 0
							0111 4V2M4.2 5.68C2.96 7.2 2.2 9.05 2
							11h2c.19-1.42.75-2.77 1.63-3.9L4.2 5.68M6
							8v2h3v1H8c-1.1 0-2 .9-2 2v3h5v-2H8v-1h1c1.11 0 2-.89
							2-2v-1a2 2 0 00-2-2H6m6
							0v5h3v3h2v-3h1v-2h-1V8h-2v3h-1V8h-2M2 13c.2 1.95.97
							3.8 2.22 5.32l1.42-1.42A8.21 8.21 0 014 13H2m5.11
							5.37l-1.43 1.42A10.04 10.04 0 0011 22v-2a8.063 8.063
							0 01-3.89-1.63z"></path>
					</svg>
					<span
						class="ml-2 text-sm text-gray-600 dark:text-gray-300
						capitalize">
						21 hours
					</span>
				</div>
			</div>

			<div class="mt-4 flex">
				<button
					class="flex items-center focus:outline-none border
					rounded-full py-2 px-6 leading-none border-gray-500
					dark:border-gray-600 select-none hover:bg-blue-400
					hover:text-white dark-hover:text-gray-200">
					<svg class="h-5 w-5 fill-current mr-2" viewBox="0 0 24 24">
						<path
							d="M14 12v7.88c.04.3-.06.62-.29.83a.996.996 0 01-1.41
							0l-2.01-2.01a.989.989 0 01-.29-.83V12h-.03L4.21
							4.62a1 1 0 01.17-1.4c.19-.14.4-.22.62-.22h14c.22 0
							.43.08.62.22a1 1 0 01.17 1.4L14.03 12H14z"></path>
					</svg>
					<span>Select Category</span>
				</button>

				<button
					class="flex items-center ml-4 focus:outline-none border
					rounded-full py-2 px-6 leading-none border-blue-500
					dark:border-blue-600 select-none hover:bg-blue-400
					hover:text-white dark-hover:text-gray-200">
					<svg
						class="h-5 w-5 fill-current mr-2 text-blue-600"
						viewBox="0 0 576 512">
						<path
							d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0
							26.5-21.5 48-48 48H48c-26.5
							0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0
							10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7
							2.3H48v352h352V350.5c0-2.1.8-4.1
							2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2
							2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9
							59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1
							82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3
							65.3-7.3L460.1
							174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8
							0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"></path>
					</svg>
					<span>Add note</span>
				</button>

			</div>
		</div>
	</div>

	<div class="flex flex-col -mt-10 mr-20">
		<span class="font-semibold text-green-500 dark:text-green-300">
			Refunded
		</span>
		<span class="font-semibold text-green-500 dark:text-green-300">
			200 $
		</span>
		<span class="text-sm text-gray-700 dark:text-gray-400 mt-2">
			300,00kr
		</span>

	</div>
</div>

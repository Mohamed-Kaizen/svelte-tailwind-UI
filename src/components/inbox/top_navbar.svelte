<script>
	let light_mode = true
	function mode_swticher() {
		if (light_mode) {
			document.documentElement.classList.add("mode-dark")
			light_mode = false
		} else {
			document.documentElement.classList.remove("mode-dark")
			light_mode = true
		}
	}
</script>

<header class="flex select-none">

	<div class="w-64 flex flex-shrink-0 px-4 py-3 bg-gray-800 items-center">
		<img
			class="h-8 w-8 rounded-full object-cover"
			src="final_fantasy_xiii_2_lightning-2560x1440.jpg"
			alt="avater" />
		<span class="ml-4 text-sm font-medium text-white">railgun</span>
	</div>

	<div class="flex-1 flex items-center justify-between px-6 bg-gray-700">
		<nav class="flex">
			<a
				href="expenses-dashboard/"
				class="inline-block px-3 py-2 rounded-lg text-sm font-medium
				text-white">
				Expenses
			</a>
			<a
				href="users-dashboard/"
				class="ml-2 inline-block px-3 py-2 rounded-lg text-sm font-medium
				text-white">
				Users
			</a>
			<a
				href="meetup/"
				class="ml-2 inline-block px-3 py-2 rounded-lg text-sm font-medium
				text-white">
				Events
			</a>
		</nav>
		<div class="text-gray-400 flex items-center">
			<span class="relative">
				<span
					class="absolute right-0 mr-3 mt-2 hover:text-blue-500
					cursor-pointer">

					<svg viewBox="0 0 512 512" class="h-5 w-5 fill-current">
						<path
							d="M505 442.7L405.3
							343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7
							44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208
							208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7
							17l99.7 99.7c9.4 9.4 24.6 9.4 33.9
							0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7
							0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128
							57.2 128 128 0 70.7-57.2 128-128 128z"></path>
					</svg>
				</span>

				<input
					class="bg-gray-900 rounded-lg text-sm placeholder-gray-400
					text-white px-3 py-2"
					placeholder="Search..." />

			</span>

			<button
				on:click="{mode_swticher}"
				class="ml-6 hover:text-blue-500 focus:outline-none transition
				duration-500 ease-in-out">
				{#if !light_mode}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-sun">
						<circle cx="12" cy="12" r="5"></circle>
						<line x1="12" y1="1" x2="12" y2="3"></line>
						<line x1="12" y1="21" x2="12" y2="23"></line>
						<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
						<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
						<line x1="1" y1="12" x2="3" y2="12"></line>
						<line x1="21" y1="12" x2="23" y2="12"></line>
						<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
						<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
					</svg>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round">
						<path
							d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
					</svg>
				{/if}

			</button>

			<button class="ml-6 hover:text-blue-500 focus:outline-none">
				<svg class="h-5 w-5 fill-current" viewBox="0 0 448 512">
					<path
						d="M439.39 362.29c-19.32-20.76-55.47-51.99-55.47-154.29
						0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98
						14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0
						102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61
						21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6
						32.1-32 .05-7.55-2.61-15.27-8.61-21.71zM67.53
						368c21.22-27.97 44.42-74.33 44.53-159.42
						0-.2-.06-.38-.06-.58 0-61.86 50.14-112 112-112s112 50.14
						112 112c0 .2-.06.38-.06.58.11 85.1 23.31 131.46 44.53
						159.42H67.53zM224 512c35.32 0 63.97-28.65
						63.97-64H160.03c0 35.35 28.65 64 63.97 64z"></path>
				</svg>
			</button>

			<button class="ml-6 hover:text-blue-500 focus:outline-none">
				<svg class="h-5 w-5 fill-current" viewBox="0 0 512 512">
					<path
						d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248
						248 248s248-111.003 248-248C504 119.083 392.957 8 256
						8zm0 448c-110.532 0-200-89.431-200-200 0-110.495
						89.472-200 200-200 110.491 0 200 89.471 200 200 0
						110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421
						68.084-72.421 92.863V300c0 6.627-5.373 12-12
						12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745
						27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541
						28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189
						0-33.894 10.977-48.942 29.969-4.057 5.12-11.46
						6.071-16.666
						2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846
						131.491 214.94 112 261.794 112c49.071 0 101.45 38.304
						101.45 88.8zM298 368c0 23.159-18.841 42-42
						42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"></path>
				</svg>
			</button>

		</div>

	</div>
</header>

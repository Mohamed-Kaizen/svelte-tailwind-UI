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

<header
	class="bg-white dark:bg-gray-800 flex items-center justify-between p-4 shadow
	fixed w-full z-10">

	<div class="h-10 w-10">
		<!-- top bar left -->

		<a href="meetup/">
			<img
				class="h-full w-full mx-auto select-none"
				src="/favicon.png"
				alt="logo" />
		</a>

	</div>

	<ul
		class="flex items-center text-sm text-gray-600 dark:text-gray-400
		select-none">
		<!-- top bar left -->

		<li class="hidden lg:block border-r border-gray-600 pr-4 mr-4">
			<a href="start-group" class="text-red-600 font-bold">
				Start new group
			</a>
		</li>

		<li class="hidden lg:block mr-6">
			<a class="hover:text-red-600" href="explore/">Explore</a>
		</li>

		<li class="hidden lg:block mr-6">
			<a class="hover:text-red-600" href="messages/">Messages</a>
		</li>

		<li
			class="cursor-pointer transition duration-300 ease-in-out mr-6"
			on:click="{mode_swticher}">

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
		</li>
		<li class="mr-6 relative">
			<a class="hover:text-red-600" href=".">
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
					<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
					<path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
				</svg>
			</a>
			<div
				class="absolute w-2 h-2 rounded-full bg-green-500 right-0 mb-5
				bottom-0"></div>
		</li>

		<li>
			<a href="profile/" class="flex items-center hover:text-red-600">
				<img
					class="rounded-full h-8 w-8"
					src="/favicon.png"
					alt="avatar" />
				<svg
					class="w-4 h-4"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor">
					<path
						d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4
						0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"></path>
				</svg>

			</a>
		</li>

	</ul>
</header>

<script>
	import LeftSideNavBar from "../../components/social-media-dashboard/left_side_navbar.svelte"
	import RightSideNavBar from "../../components/social-media-dashboard/right_side_navbar.svelte"
	import TopCards from "../../components/social-media-dashboard/top_cards.svelte"
	import BottomCards from "../../components/social-media-dashboard/bottom_cards.svelte"

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

<div class="h-screen w-full flex overflow-hidden select-none">
	<LeftSideNavBar />

	<main
		class="flex-1 bg-gray-200 dark:bg-black container transition duration-500
		ease-in-out">

		<div class="py-4 px-24">

			<div class="flex items-center justify-between">
				<!-- Header -->

				<div>

					<button class="focus:outline-none ">
						<svg
							class="h-5 w-5 fill-current dark:text-gray-400"
							viewBox="0 0 24 24">
							<path
								d="M16 20h4v-4h-4m0-2h4v-4h-4m-6-2h4V4h-4m6
								4h4V4h-4m-6 10h4v-4h-4m-6 4h4v-4H4m0 10h4v-4H4m6
								4h4v-4h-4M4 8h4V4H4v4z"></path>
						</svg>
					</button>

					<button
						class="focus:outline-none text-gray-600
						dark:text-gray-600 focus:text-black
						dark-focus:text-gray-400">
						<svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
							<path
								d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2z"></path>
						</svg>
					</button>

					<button
						class="hover:text-red-500 dark-hover:text-red-300
						dark:text-gray-400 focus:outline-none cursor-pointer
						transition duration-500 ease-in-out ml-1"
						on:click="{mode_swticher}">

						{#if !light_mode}
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round">
								<circle cx="12" cy="12" r="5"></circle>
								<line x1="12" y1="1" x2="12" y2="3"></line>
								<line x1="12" y1="21" x2="12" y2="23"></line>
								<line
									x1="4.22"
									y1="4.22"
									x2="5.64"
									y2="5.64"></line>
								<line
									x1="18.36"
									y1="18.36"
									x2="19.78"
									y2="19.78"></line>
								<line x1="1" y1="12" x2="3" y2="12"></line>
								<line x1="21" y1="12" x2="23" y2="12"></line>
								<line
									x1="4.22"
									y1="19.78"
									x2="5.64"
									y2="18.36"></line>
								<line
									x1="18.36"
									y1="5.64"
									x2="19.78"
									y2="4.22"></line>
							</svg>
						{:else}
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round">
								<path
									d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21
									12.79z"></path>
							</svg>
						{/if}
					</button>

				</div>

				<select
					class="p-3 bg-white dark:bg-gray-800 dark:text-gray-300
					uppercase rounded-lg">
					<option>last 15 days</option>
					<option>last months</option>
					<option>today</option>
					<option>last week</option>
				</select>

			</div>

			<TopCards />

			<div>
				<!-- Graph -->

				<div
					class="p-3 mt-6 flex justify-between capitalize bg-white
					dark:bg-gray-800 dark:text-gray-300 rounded-lg">
					<span class="text-xl font-semibold">
						instagram subscribers
					</span>
					<div class="flex items-center text-sm">
						<div
							class="w-2 h-2 mr-1 rounded-full bg-yellow-500
							dark:bg-yellow-300"></div>
						<span>gained</span>
						<div
							class="w-2 h-2 mr-1 ml-3 rounded-full bg-red-500
							dark:bg-red-600"></div>
						<span>lost</span>
					</div>
				</div>

			</div>

			<BottomCards />
		</div>

	</main>

	<RightSideNavBar />

</div>

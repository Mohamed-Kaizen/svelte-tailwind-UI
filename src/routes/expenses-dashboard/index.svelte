<script>
	import SideBar from "../../components/expenses-dashboard/side_navbar.svelte"
	import TopPanel from "../../components/expenses-dashboard/top_panel.svelte"
	import Card from "../../components/expenses-dashboard/card.svelte"
</script>

<div class="h-screen flex">

	<SideBar />

	<main
		class="flex-1 bg-gray-200 dark:bg-gray-900 overflow-y-auto transition
		duration-500 ease-in-out">
		<div
			class="px-24 py-12 text-gray-700 dark:text-gray-500 transition
			duration-500 ease-in-out">
			<TopPanel />
			<div
				class="border dark:border-gray-700 transition duration-500
				ease-in-out"></div>

			<div class="flex flex-col mt-2">
				{#each {length: 4} as _, index}
					<div class="flex flex-row mt-2">
						<Card {index} />
						<div
							class="text-center flex flex-col items-center
							justify-center bg-white dark:bg-gray-800
							dark:text-gray-300 ml-1 px-12 cursor-pointer
							hover:bg-blue-200 dark-hover:bg-blue-500 rounded-lg">
							{#if index === 0}
								<svg
									class="h-5 w-5 fill-current"
									viewBox="0 0 24 24">
									<path
										d="M9.47 9.65l-1.41 1.42L11
										14l5.19-5.18-1.41-1.42L11 11.18M17
										3H7c-1.1 0-2 .9-2 2v16l7-3 7
										3V5c0-1.1-.9-2-2-2m0 15l-5-2.18L7
										18V5h10z"></path>
								</svg>
							{:else}
								<svg
									class="h-5 w-5 fill-current text-blue-500
									dark:text-blue-300"
									viewBox="0 0 24 24">
									<path
										d="M17 18V5H7v13l5-2.18L17 18m0-15a2 2 0
										012 2v16l-7-3-7 3V5a2 2 0 012-2h10m-6
										4h2v2h2v2h-2v2h-2v-2H9V9h2V7z"></path>
								</svg>
							{/if}

						</div>

					</div>
				{/each}
			</div>
		</div>

	</main>

</div>

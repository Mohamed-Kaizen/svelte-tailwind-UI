<script>
	import TopNavBar from "../../components/events-dashboard/top_navbar.svelte"
	import LeftSideNavBar from "../../components/events-dashboard/left_side_navbar.svelte"
	import RightSideNavBar from "../../components/events-dashboard/right_side_navbar.svelte"
	import Card from "../../components/events-dashboard/card.svelte"
</script>

<div class="h-screen w-full flex flex-col select-none overflow-hidden">

	<div class="flex-shrink-0">
		<TopNavBar />
	</div>

	<div class="flex-1 w-full flex overflow-y-auto">

		<LeftSideNavBar />

		<main class="py-8 px-24 flex-1 bg-gray-200">

			<div
				class="flex items-center justify-between capitalize font-semibold
				text-black text-lg">

				<span>upcoming event</span>

				<button
					class="py-2 px-4 border border-gray-500 rounded-full
					capitalize font-medium">
					all events
				</button>

			</div>

			<Card />

		</main>

		<RightSideNavBar />

	</div>

</div>

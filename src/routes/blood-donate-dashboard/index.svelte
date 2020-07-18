<script>
	import SideNavBar from "../../components/blood-donate-dashboard/side_navbar.svelte"
	import Header from "../../components/blood-donate-dashboard/header.svelte"
	import TopCardList from "../../components/blood-donate-dashboard/top_card_list.svelte"
	import BottomCardList from "../../components/blood-donate-dashboard/bottom_card_list.svelte"
	import Map from "../../components/blood-donate-dashboard/map_section.svelte"
</script>

<div class="h-screen w-full flex overflow-hidden select-none">
	<SideNavBar />

	<main
		class="px-8 py-10 flex-1 bg-gray-200 dark:bg-black rounded-l-lg
		transition duration-500 ease-in-out overflow-y-auto">

		<Header />

		<TopCardList />

		<div class="mt-10 flex justify-between">

			<BottomCardList />

			<Map />

		</div>

	</main>

</div>

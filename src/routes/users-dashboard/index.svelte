<script>
	import SideNavBar from "../../components/users-dashboard/side_navbar.svelte"
	import TopNavBar from "../../components/users-dashboard/top_navbar.svelte"
	import Header from "../../components/users-dashboard/header.svelte"
	import ListHeader from "../../components/users-dashboard/list_header.svelte"
	import Card from "../../components/users-dashboard/card.svelte"
</script>

<div class="h-screen w-full flex overflow-hidden">
	<SideNavBar />

	<div
		class="flex-1 flex flex-col bg-gray-100 dark:bg-gray-700 transition
		duration-500 ease-in-out overflow-y-auto">

		<div class="mx-10 my-2">

			<TopNavBar />

			<Header />

			<ListHeader />

			<Card />

		</div>

	</div>

</div>

<script>
	import NavBar from "../../components/inbox/top_navbar.svelte"
	import SideNavBar from "../../components/inbox/side_navbar.svelte"
</script>

<div class="h-screen flex flex-col">

	<div class="flex-shrink-0">
		<NavBar />
	</div>

	<div class="flex-1 flex">

		<SideNavBar />

		<main class="bg-red-200">
			<div></div>
			<div></div>

		</main>

	</div>

</div>

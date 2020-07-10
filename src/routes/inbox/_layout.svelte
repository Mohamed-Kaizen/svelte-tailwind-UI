<script>
	import NavBar from "../../components/inbox/top_navbar.svelte"
	import SideNavBar from "../../components/inbox/side_navbar.svelte"
</script>

<svelte:head>
	<title>Inbox | svelte tailwind UI</title>
</svelte:head>

<div class="h-screen flex flex-col">

	<div class="flex-shrink-0">
		<NavBar />
	</div>

	<div class="flex-1 flex overflow-hidden">
		<SideNavBar />

		<main class="flex-1 flex bg-gray-200">

			<slot />
		</main>

	</div>

</div>

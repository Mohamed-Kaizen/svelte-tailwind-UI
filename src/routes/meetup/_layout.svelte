<script>
	import NavBar from "../../components/meetup/top_navbar.svelte"
</script>

<svelte:head>
	<title>Meet up| svelte tailwind UI</title>
</svelte:head>

<div class="font-sans bg-gray-200 dark:bg-black">
	<NavBar />
	<slot />
</div>

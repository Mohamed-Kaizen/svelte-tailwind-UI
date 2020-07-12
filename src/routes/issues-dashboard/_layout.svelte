<script>
	import {stores} from "@sapper/app"

	import SideNavBar from "../../components/issues-dashboard/side_navbar.svelte"
	import TopNavBar from "../../components/issues-dashboard/top_navbar.svelte"

	import {get_path} from "../../utils"

	const {page} = stores()

	$: path = $page.path

	const issues_list = [
		{issue: "All", route: "/issues/", badge: 110},
		{issue: "Assigned to me", route: "/to-me/", badge: 10},
		{issue: "Created by me", route: "/by-me/", badge: 100},
		{issue: "Archived", route: "/archived/", badge: 0},
	]

	const tags_list = [
		{tag: "Bug", route: "/bug"},
		{tag: "Feature Request", route: "/feature-request"},
		{tag: "Marketing", route: "/marketing"},
		{tag: "V2.0", route: "/v2"},
		{tag: "Enhancement", route: "/enhancement"},
		{tag: "Design", route: "/design"},
	]

	let view_type = true
	$: path_name = get_path(path)
	let drawer = false
</script>

<svelte:head>
	<title>Issues DashBoard | svelte tailwind UI</title>
</svelte:head>

<div class="h-screen flex">

	<div
		on:click="{() => (drawer = !drawer)}"
		class="{drawer ? 'block' : 'hidden'} fixed inset-0 bg-black opacity-50
		lg:hidden"></div>

	<SideNavBar {issues_list} {tags_list} {path} {drawer} />

	<div class="flex-1 min-w-0 flex flex-col bg-white">

		<TopNavBar bind:view_type bind:drawer />

		<slot />
	</div>

</div>

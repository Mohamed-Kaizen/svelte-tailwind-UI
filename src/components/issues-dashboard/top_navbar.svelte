<script>
	export let view_type, drawer

	import ViewSwitch from "./views_switch.svelte"
	import MobileViewSwitch from "./mobile_views_switch.svelte"
	import AvatarList from "./avatar_list.svelte"
	import NavBar from "./navbar.svelte"
</script>

<div class="flex-shrink-0 border-b-2 border-gray-200">
	<header>
		<div class="px-6">

			<NavBar bind:drawer />

			<div class="flex items-center justify-between py-2">

				<div class="sm:flex sm:items-center">
					<h2
						class="text-2xl font-semibold text-gray-900 leading-tight">
						All Issues
					</h2>

					<AvatarList />

				</div>

				<div class="flex">

					<ViewSwitch bind:view_type />

					<button
						class="ml-5 flex items-center pl-2 pr-4 py-2 text-sm
						font-medium text-white bg-gray-800 rounded-md">
						<svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
							<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
						</svg>

						<span class="ml-1">New Issue</span>
					</button>
				</div>
			</div>
		</div>

		<MobileViewSwitch bind:view_type />

	</header>
</div>

<script>
	export let issues_list, tags_list, path, drawer

	import {match_path} from "../../utils"
</script>

<div
	class="{drawer ? 'block fixed z-30 ' : 'hidden'} lg:block w-64 px-8 py-4
	bg-white border-r overflow-auto h-full">

	<a href="/">
		<img class="h-6 w-6" src="favicon.png" alt="svelte logo" />
	</a>

	<nav class="mt-8">

		<h3 class="text-xs font-semibold text-gray-600 uppercase tracking-wide">
			Issues
		</h3>

		<div class="mt-2 -mx-3">

			{#each issues_list as {issue, badge, route}}
				<a
					href="{route}"
					class="mb-1 flex justify-between items-center px-3 py-2 {match_path(path, route) ? 'bg-gray-200 rounded-lg' : 'hover:bg-gray-200 rounded-lg'}">

					<span
						class=" text-sm font-medium {match_path(path, route) ? 'text-gray-900' : 'text-gray-700 hover:text-gray-900'}
						">
						{issue}
					</span>

					{#if badge > 0}
						<span class="text-xs font-semibold text-gray-700">
							{badge}
						</span>
					{/if}

				</a>
			{/each}

		</div>

		<h3
			class="mt-8 text-xs font-semibold text-gray-600 uppercase
			tracking-wide">
			Tags
		</h3>

		<div class="mt-2 -mx-3">

			{#each tags_list as {tag, route}}
				<a
					href="{route}"
					class="mb-1 flex justify-between items-center px-3 py-2 {match_path(path, route) ? 'bg-gray-200 rounded-lg' : 'hover:bg-gray-200 rounded-lg'}">

					<span
						class=" text-sm font-medium {match_path(path, route) ? 'text-gray-900' : 'text-gray-700 hover:text-gray-900'}
						">
						{tag}
					</span>
				</a>
			{/each}

		</div>

		<button
			class="w-full -ml-3 px-3 py-2 flex justify-between items-center
			text-sm font-medium hover:bg-gray-200 rounded-lg">
			<span>Create New Project</span>

		</button>

	</nav>

</div>

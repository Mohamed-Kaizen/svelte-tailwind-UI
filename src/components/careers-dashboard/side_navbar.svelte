<script>
	const links = [
		[
			"social-media-dashboard/",
			"dashboard",
			"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z",
		],
		[
			"social-media-dashboard/",
			"jobs",
			"M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z",
			"M9 2a1 1 0 000 2h2a1 1 0 100-2H9z",
		],
		[
			"social-media-dashboard/",
			"company",
			"M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z",
		],
		[
			"social-media-dashboard/",
			"candidates",
			"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
		],
		[
			"social-media-dashboard/",
			"news & events",
			"M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z",
		],
	]
</script>

<nav
	class="w-1/4 px-8 pt-10 flex flex-col items-center overflow-y-auto border-r">
	<div class="w-full flex items-center justify-between">
		<!-- App Logo -->
		<div class="flex items-center">
			<img
				class="h-8 w-8 mr-3"
				src="careers_logo.png/"
				alt="careers logo" />
			<h1 class="font-bold text-2xl">Careers</h1>
		</div>

		<button class="text-gray-600">
			<svg
				class="h-6 w-6 fill-current"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
			</svg>
		</button>
	</div>

	<ul class="w-full mt-8">
		<!-- Links -->

		{#each links as [route, route_name, route_icon, route_icon_2], index}
			<li
				class="h-12 mb-6 flex items-center justify-between {index === 1 ? 'text-black' : 'text-gray-600'}">
				<a
					href="{route}"
					class="w-full h-full pl-8 -ml-8 flex items-center border-l-4 {index === 1 ? 'border-blue-600' : 'border-transparent'}">
					<svg
						class="h-6 w-6 {index === 1 ? ' text-purple-500' : ' text-purple-300'}"
						viewBox="0 0 20 20"
						fill="currentColor">
						{#if route_icon_2}
							<path d="{route_icon_2}"></path>
						{/if}

						<path d="{route_icon}"></path>
					</svg>

					<span class="ml-4 capitalize font-medium">{route_name}</span>
				</a>

				{#if index > 0}
					<button>
						<svg
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
						</svg>
					</button>
				{/if}
			</li>
		{/each}
	</ul>
</nav>

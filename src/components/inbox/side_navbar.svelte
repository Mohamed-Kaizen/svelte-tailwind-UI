<script>
	const list = ["Flagged", "Drafts", "Assigned", "Closed", "Junk"]
</script>

<div class="w-64 p-6 bg-gray-100">
	<nav>
		<h2 class="text-xs font-semibold text-gray-600 uppercase tracking-wide">
			MailBoxes
		</h2>
		<div class="mt-4">
			<a
				href="/"
				class="-mx-3 px-3 py-2 flex items-center justify-between text-sm
				font-medium bg-gray-200 rounded-lg">
				<span class="flex items-center">
					<svg
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						class="h-6 w-6 text-gray-700">
						<polyline
							points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
						<path
							d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0
							2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0
							0-1.79 1.11z"></path>
					</svg>
					<span class="ml-2 text-gray-900">Inbox</span>
				</span>
				<span
					class="inline-block px-3 py-1 leading-none text-xs
					font-semibold text-gray-700 bg-gray-300 rounded-full">
					6
				</span>
			</a>
			{#each list as name, index}
				<a
					href="/"
					class="mt-2 -mx-3 px-3 py-2 flex items-center justify-between
					text-sm font-medium hover:bg-gray-200 rounded-lg">
					<span class="flex items-center">
						<svg
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							class="h-6 w-6 text-gray-500 ">
							<polyline
								points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
							<path
								d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0
								2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0
								0-1.79 1.11z"></path>
						</svg>
						<span class="ml-2 text-gray-700">{name}</span>
					</span>
					{#if index > 0}
						<span
							class="inline-block px-3 py-1 leading-none text-xs
							font-semibold text-gray-700 bg-gray-300 rounded-full">
							{Math.ceil(index * 5 + 5 / 4)}
						</span>
					{/if}
				</a>
			{/each}
		</div>
		<h2
			class="mt-8 text-xs font-semibold text-gray-600 uppercase
			tracking-wide">
			Folders
		</h2>
		<div class="mt-4">
			<a href="/" class="block text-sm font-medium text-gray-700">
				Refunds
			</a>
			<a href="/" class="mt-4 block text-sm font-medium text-gray-700">
				Discount
			</a>
			<a href="/" class="mt-4 block text-sm font-medium text-gray-700">
				Bugs
			</a>
		</div>
	</nav>
</div>

<script>
	import Card from "../../components/inbox/card.svelte"
	let messages = [
		[
			"New World",
			"2 days ago",
			"Madara",
			"loredasda adasdasd sdasd.....",
			"inbox/#",
			false,
			true,
		],
		[
			"Toaru",
			"6 days ago",
			"Misaka",
			"loredasda adasdasd sdasd.....",
			"inbox/#",
			true,
			false,
		],
		[
			"Drifters",
			"2 weeks ago",
			"Nobunaga",
			"loredasda adasdasd sdasd.....",
			"inbox/#",
			false,
			false,
		],
		[
			"Mitsudomoe",
			"a month ago",
			"Mitsuba",
			"loredasda adasdasd sdasd.....",
			"inbox/#",
			false,
			false,
		],
		[
			"Slam Dunk",
			"4 months ago",
			"Sakuragi",
			"loredasda adasdasd sdasd.....",
			"inbox/#",
			true,
			false,
		],
		[
			"Slime",
			"a year ago",
			"Rimuru",
			"loredasda adasdasd sdasd.....",
			"inbox/#",
			false,
			false,
		],
		[
			"youjo",
			"2 years ago",
			"Tanya",
			"loredasda adasdasd sdasd.....",
			"inbox/#",
			false,
			false,
		],
		[
			"Grand Blue",
			"6 years ago",
			"Kohei",
			"loredasda adasdasd sdasd.....",
			"inbox/#",
			true,
			false,
		],
	]
</script>

<div class="flex flex-col w-full max-w-xs flex-grow border-l border-r">
	<div
		class="flex-shrink-0 px-4 py-2 flex items-center justify-between border-b">
		<button class="flex items-center text-xs font-semibold text-gray-600">
			Sorted by Date
			<svg
				class="ml-1 h-5 w-5 fill-current text-gray-500"
				viewBox="0 0 320 512">
				<path
					d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6
					0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4
					96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6
					0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
			</svg>
		</button>
		<button>
			<svg class="h-5 w-5 fill-current text-gray-500" viewBox="0 0 24 24">
				<path
					d="M18 21l-4-4h3V7h-3l4-4 4 4h-3v10h3M2 19v-2h10v2M2
					13v-2h7v2M2 7V5h4v2H2z"></path>
			</svg>
		</button>
	</div>

	<div class="flex-1 overflow-y-auto">
		{#each messages as [title, date, username, overview, path, unreaded, active]}
			<Card
				{title}
				{date}
				{username}
				{overview}
				{path}
				{unreaded}
				{active} />
		{/each}

	</div>

</div>

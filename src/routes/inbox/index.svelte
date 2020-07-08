<script>
	import List from "../../components/inbox/list.svelte"
	import ToolBar from "../../components/inbox/message_toolbar.svelte"
	import Card from "../../components/inbox/detail_card.svelte"
	let messages = [
		[
			"Madara",
			"wrote",
			"2 days ago at 7:45 PM",
			"/madara.jpg",
			"Destorying the old world and start new build new wrold :)",
		],

		[
			"railgun",
			"replied",
			"1 days ago at 10:45 PM",
			"/final_fantasy_xiii_2_lightning-2560x1440.jpg",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eum sed nulla magni dolorum suscipit ad nobis deserunt, cupiditate dolore voluptates sequi ullam amet non molestiae distinctio perferendis odio nisi.",
		],
		[
			"Madara",
			"wrote",
			"2 days ago at 7:45 PM",
			"/madara.jpg",
			"Destorying the old world and start new build new wrold :)",
		],

		[
			"railgun",
			"replied",
			"1 days ago at 10:45 PM",
			"/final_fantasy_xiii_2_lightning-2560x1440.jpg",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eum sed nulla magni dolorum suscipit ad nobis deserunt, cupiditate dolore voluptates sequi ullam amet non molestiae distinctio perferendis odio nisi.",
		],
		[
			"Madara",
			"wrote",
			"2 days ago at 7:45 PM",
			"/madara.jpg",
			"Destorying the old world and start new build new wrold :)",
		],

		[
			"railgun",
			"replied",
			"1 days ago at 10:45 PM",
			"/final_fantasy_xiii_2_lightning-2560x1440.jpg",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eum sed nulla magni dolorum suscipit ad nobis deserunt, cupiditate dolore voluptates sequi ullam amet non molestiae distinctio perferendis odio nisi.",
		],
	]
</script>

<List />
<div class="flex-1 flex flex-col w-0">

	<div class="relative">

		<ToolBar />

		<div
			class="flex items-center justify-between bg-white px-5 py-4 shadow-md">
			<!-- message meta data -->
			<h3 class="text-xl text-gray-900 truncate">New World</h3>
			<div class="ml-4 flex-shrink-0">
				<span>#1586</span>
				<span
					class="ml-2 text-sm font-semibold text-gray-900 px-3 py-2
					bg-green-200 rounded-full">
					Active
				</span>
			</div>
		</div>

	</div>

	<div class="p-3 flex-1 overflow-y-auto">
		{#each messages as [username, message_type, date, image, message]}
			<Card {username} {message_type} {date} {image} {message} />
		{/each}
	</div>
</div>

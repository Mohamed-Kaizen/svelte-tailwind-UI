<script>
	import NavBar from "../../components/meetup/top_navbar.svelte"
	import Hero from "../../components/meetup/hero_section.svelte"
	import CardEvent from "../../components/meetup/card_event.svelte"
	import SimpleCard from "../../components/meetup/simple_card.svelte"
	import InfiniteScroll from "../../components/infinite_scroll.svelte"
	import SideFilter from "../../components/meetup/side_filter.svelte"
	let size = 1
	function increase() {
		size++
	}
</script>

<Hero />

<InfiniteScroll callball="{increase}">
	<div
		class="container mx-auto px-8 xl:px-40 flex flex-col-reverse lg:flex-row
		mt-16"
		slot="content">
		<!-- Main section -->

		<div class="w-full lg:w-8/12">
			<!-- Event List section -->
			{#each {length: 2} as _, index}
				<div class="pl-3 uppercase font-bold text-sm py-2 pb-4">
					July {index + 2}
				</div>

				<div class="border border-gray-400 bg-white mb-8">
					{#each {length: 3} as _, indexo}
						<CardEvent {indexo} />
					{/each}
				</div>
			{/each}

			<div class="border-t border-b border-gray-400 py-8 mb-8">
				<div class="text-center font-bold text-2xl mb-2">
					Host events in Japan
				</div>

				<div class="text-center mb-8">
					Can't find what you're looking for ? Create a Meetup group to
					start hosting local events.
				</div>

				{#each {length: 2} as _}
					<div class="flex">
						<SimpleCard />
						<SimpleCard />
					</div>
				{/each}

			</div>

			{#each {length: size} as _, index}
				<div class="pl-3 uppercase font-bold text-sm py-2 pb-4">
					July {index + 7}
				</div>

				<div class="border border-gray-400 bg-white mb-8">
					{#each {length: size} as _, indexo}
						<CardEvent {indexo} />
					{/each}
				</div>
			{/each}
		</div>

		<div class="w-full mb-4 lg:w-3/12 lg:ml-6">
			<!-- Event Filter section -->
			<div class="mt-12 lg:fixed lg:w-64">
				<SideFilter />
			</div>
		</div>

	</div>
</InfiniteScroll>

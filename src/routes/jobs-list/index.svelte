<script>
	import TopNavBar from "../../components/jobs-list/top_navbar.svelte"
	import Search from "../../components/jobs-list/search.svelte"
	import ListHeader from "../../components/jobs-list/list_header.svelte"
	import Card from "../../components/jobs-list/card.svelte"
	import JobType from "../../components/jobs-list/job_type.svelte"
	import JobRoles from "../../components/jobs-list/job_roles.svelte"
	import Location from "../../components/jobs-list/location.svelte"
</script>

<div class="h-screen w-full select-none">
	<TopNavBar />
	<Search />
	<main class="mt-12 px-20 flex capitalize">

		<aside class="w-4/12 flex flex-col">
			<!-- Filter side bar -->

			<JobType />

			<JobRoles />

			<Location />

		</aside>

		<div class="w-full flex flex-col ">
			<!-- Jobs list -->

			<ListHeader />

			<div class="mt-6">
				<!-- Card List -->

				<Card />

				<div
					class="mt-6 flex items-center justify-between border-b pb-5">
					<!-- Card -->

					<div class="flex">

						<img
							class="h-10 w-10 rounded-full object-cover"
							src="https://pbs.twimg.com/profile_images/1130808184384425984/ksu9xTZM_400x400.png"
							alt="klarna logo" />

						<div class="ml-5 flex flex-col leading-snug">
							<p class="w-56 font-semibold">
								senior product designer
							</p>
							<p class="text-sm text-gray-600">
								klarna &middot; 1 day ago
							</p>
						</div>

					</div>

					<div class="flex flex-col leading-snug">
						<span class="font-medium">freelance</span>
						<span class="text-sm text-gray-600">
							stockolm, swedan
						</span>
					</div>
					<div class="flex">

						<button class="mr-10">
							<svg
								class="h-6 w-6 fill-current text-blue-600"
								viewBox="0 0 24 24">
								<path d="M0 0h24v24H0V0z" fill="none"></path>
								<path
									d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7
									3V5c0-1.1-.9-2-2-2z"></path>
							</svg>
						</button>

						<button>
							<svg
								class="h-6 w-6 fill-current"
								viewBox="0 0 24 24"
								fill="black"
								width="18px"
								height="18px">
								<path d="M0 0h24v24H0V0z" fill="none"></path>
								<path
									d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9
									2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9
									2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2
									2-.9 2-2-.9-2-2-2z"></path>
							</svg>

						</button>

					</div>

				</div>

				{#each {length: 6} as _}
					<Card />
				{/each}

			</div>

		</div>

	</main>
</div>

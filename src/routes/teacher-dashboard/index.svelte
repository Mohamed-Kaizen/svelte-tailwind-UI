<script>
	import LeftSideNavBar from "../../components/teacher-dashboard/left_side_navbar.svelte"
	import RightSideNavBar from "../../components/teacher-dashboard/right_side_navbar.svelte"
	import CardList from "../../components/teacher-dashboard/card_list.svelte"
</script>

<div class="h-screen w-full flex overflow-hidden select-none">
	<LeftSideNavBar />

	<main
		class="my-1 pt-2 pb-2 px-10 flex-1 bg-gray-200 dark:bg-black rounded-l-lg
		transition duration-500 ease-in-out overflow-y-auto">

		<div class="flex flex-col capitalize text-3xl">
			<span class="font-semibold">hello,</span>
			<span>tempest!</span>

		</div>

		<div class="flex">

			<CardList />

			<div
				class="mr-6 w-1/2 mt-8 py-2 flex-shrink-0 flex flex-col
				bg-purple-300 rounded-lg text-white">

				<h3
					class="flex items-center pt-1 pb-1 px-8 text-lg font-bold
					capitalize">
					<!-- Header -->
					<span>scheduled lessons</span>
					<button class="ml-2">
						<svg class="h-5 w-5 fill-current" viewBox="0 0 256 512">
							<path
								d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9
								0l-22.6-22.6c-9.4-9.4-9.4-24.6
								0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6
								0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136
								136c9.5 9.4 9.5 24.6.1 34z"></path>
						</svg>
					</button>
				</h3>

				<div class="flex flex-col items-center mt-12">
					<img
						src="teacher_dashboard_empty.png/"
						alt=" empty schedule" />

					<span class="font-bold mt-8">Your schedule is empty</span>

					<span class="text-purple-500">
						Make your first appointment
					</span>

					<button class="mt-8 bg-purple-800 rounded-lg py-2 px-4">
						Find a Job
					</button>

				</div>
			</div>

		</div>

	</main>

	<RightSideNavBar />

</div>

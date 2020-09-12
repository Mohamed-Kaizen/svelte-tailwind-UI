<header
	class="h-8 w-full flex flex-col lg:flex-row lg:items-center
	lg:justify-between">

	<div class="pb-2 lg:pb-0 flex lg:hidden">
		<!-- Small to  Meduim  Screen -->

		<div class="flex flex-1 shadow-sm rounded-lg border border-gray-400">

			<button
				type="button"
				class="flex items-center justify-between w-full px-4 py-1
				bg-gray-100 text-sm leading-5 rounded-lg">

				<span>Inbox</span>

				<svg
					class="-mr-1 ml-2 h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor">
					<path
						fill-rule="evenodd"
						d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1
						0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0
						010-1.414z"
						clip-rule="evenodd"></path>
				</svg>

			</button>

		</div>

		<div class="ml-2 flex shadow-sm rounded-lg border border-gray-400">

			<button
				type="button"
				class="flex items-center justify-center w-full px-4 py-1
				bg-gray-100 text-sm leading-5 rounded-lg">

				<span>Unread</span>

				<svg
					class="-mr-1 ml-2 h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor">
					<path
						fill-rule="evenodd"
						d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1
						0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0
						010-1.414z"
						clip-rule="evenodd"></path>
				</svg>

			</button>

		</div>

	</div>

	<div class="w-3/4 hidden lg:flex items-center">
		<!-- large Screens -->
		<div class="flex border border-gray-400 rounded-lg">
			<button class="h-8 w-12 rounded-l-lg bg-gray-300">All</button>

			<button
				class="h-8 w-20 rounded-r-lg bg-gray-100 focus:bg-gray-300
				focus:outline-none">
				Unread
			</button>
		</div>

		<div
			class="w-3/5 h-8 mx-4 px-3 flex items-center border border-gray-400
			rounded-lg bg-gray-100">
			<span class="hover:text-pink-500 cursor-pointer mr-3">

				<svg class="h-4 w-4" viewBox="0 0 16 16" aria-hidden="true">
					<path
						fill-rule="evenodd"
						d="M.75 3a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5H.75zM3
						7.75A.75.75 0 013.75 7h8.5a.75.75 0 010 1.5h-8.5A.75.75 0
						013 7.75zm3 4a.75.75 0 01.75-.75h2.5a.75.75 0 010
						1.5h-2.5a.75.75 0 01-.75-.75z"></path>
				</svg>
			</span>

			<input
				class="bg-transparent focus:outline-none text-sm
				placeholder-gray-800"
				placeholder="Filter notifications" />

		</div>

		<div class="flex shadow-sm rounded-lg border border-gray-400">

			<button
				type="button"
				class="flex items-center justify-center w-full px-4 py-1
				bg-gray-100 text-sm leading-5 rounded-lg">

				<span>
					Group by:
					<strong>Date</strong>
				</span>

				<svg
					class="-mr-1 ml-2 h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor">
					<path
						fill-rule="evenodd"
						d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1
						0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0
						010-1.414z"
						clip-rule="evenodd"></path>
				</svg>

			</button>

		</div>

	</div>

	<div class="mt-1 flex flex-col lg:flex-row items-center">
		<!-- New Notifications -->

		<a
			class="flex items-center font-semibold text-xs text-blue-600
			hover:underline"
			href="https://github.com/notifications/beta?query=is%3Aunread"
			target="blank">
			<span class="w-2 h-2 mr-1 rounded-full bg-blue-600"></span>
			<span>9 new notifications</span>
		</a>

	</div>

</header>

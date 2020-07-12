<div
	class="mr-6 w-1/2 mt-8 py-2 flex-shrink-0 flex flex-col bg-white
	dark:bg-gray-600 rounded-lg">
	<!-- Card list container -->

	<h3
		class="flex items-center pt-1 pb-1 px-8 text-lg font-semibold capitalize
		dark:text-gray-300">
		<!-- Header -->
		<span>nearby jobs</span>
		<button class="ml-2">
			<svg class="h-5 w-5 fill-current" viewBox="0 0 256 512">
				<path
					d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9
					0l-22.6-22.6c-9.4-9.4-9.4-24.6
					0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3
					103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
			</svg>
		</button>
	</h3>

	<div>
		<!-- List -->

		<ul class="pt-1 pb-2 px-3 overflow-y-auto">
			{#each {length: 2} as _}
				<li class="mt-2">

					<a
						class="p-5 flex flex-col justify-between bg-gray-100
						dark:bg-gray-200 rounded-lg"
						href="/">

						<div
							class="flex items-center justify-between
							font-semibold capitalize dark:text-gray-700">
							<!-- Top section -->

							<span>english lesson</span>

							<div class="flex items-center">
								<svg
									class="h-5 w-5 fill-current mr-1
									text-gray-600"
									viewBox="0 0 24 24">
									<path
										d="M14 12l-4-4v3H2v2h8v3m12-4a10 10 0
										01-19.54 3h2.13a8 8 0 100-6H2.46A10 10 0
										0122 12z"></path>
								</svg>
								<span>4.2 mi</span>
							</div>

						</div>

						<p
							class="text-sm font-medium leading-snug text-gray-600
							my-3">
							<!-- Middle section -->
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Explicabo assumenda porro sapiente, cum nobis
							tempore delectus consectetur ullam reprehenderit quis
							ducimus, iusto dolor nam corporis id perspiciatis
							consequuntur saepe excepturi.
						</p>

						<div class="flex justify-between">
							<!-- Bottom section -->

							<div class="flex">
								<img
									class="h-6 w-6 rounded-full mr-3"
									src="1.jpg/"
									alt="Issue" />
								<span>
									<span class="text-blue-500 font-semibold">
										Regina C.
									</span>
									via HeyTutor
								</span>
							</div>

							<p
								class="text-sm font-medium leading-snug
								text-gray-600">
								14 hours ago
							</p>

						</div>

					</a>
				</li>
			{/each}
		</ul>

		<a
			href="/"
			class="flex justify-center capitalize text-blue-500
			dark:text-blue-200">
			<span>see all</span>
		</a>

	</div>

</div>

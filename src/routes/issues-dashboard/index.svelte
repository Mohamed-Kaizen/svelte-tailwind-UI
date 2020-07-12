<script>
	const cards_col = [
		{
			name: "Backlog",
			tasks: [
				{
					task_name: "Add discount to checkout page",
					created_at: "Sep 30",
					task_type: "Feature Request",
					route: "/",
				},
				{
					task_name: "Add discount to checkout page",
					created_at: "Sep 30",
					task_type: "Design",
					route: "/",
				},
				{
					task_name: "Add discount to checkout page",
					created_at: "Sep 30",
					task_type: "Feature Request",
					route: "/",
				},
			],
		},
		{
			name: "In Progress",
			tasks: [
				{
					task_name: "Stop Bad things",
					created_at: "Sep 4",
					task_type: "Design",
					route: "/",
				},
			],
		},
		{
			name: "Read For Review",
			tasks: [
				{
					task_name: "Go To Sleep ?",
					created_at: "Fab 15",
					task_type: "Feature Request",
					route: "/",
				},
				{
					task_name: "Go To Sleep ?",
					created_at: "Fab 15",
					task_type: "",
					route: "/",
				},
				{
					task_name: "Go To Sleep ?",
					created_at: "Fab 15",
					task_type: "",
					route: "/",
				},
				{
					task_name: "Go To Sleep ?",
					created_at: "Fab 15",
					task_type: "Feature Request",
					route: "/",
				},
				{
					task_name: "Go To Sleep ?",
					created_at: "Fab 15",
					task_type: "",
					route: "/",
				},
				{
					task_name: "Go To Sleep ?",
					created_at: "Fab 15",
					task_type: "Design",
					route: "/",
				},
				{
					task_name: "Go To Sleep ?",
					created_at: "Fab 15",
					task_type: "",
					route: "/",
				},
			],
		},
	]
</script>

<div class="flex-1 overflow-auto">

	<main class="p-3 h-full inline-flex overflow-hidden">

		{#each cards_col as {name, tasks}, index}
			<div
				class="{index === 0 ? '' : 'ml-3'} flex-shrink-0 flex flex-col
				w-80 bg-gray-100 rounded-md">
				<h3
					class="flex-shrink-0 pt-3 pb-1 px-3 text-sm font-medium
					text-gray-700">
					{name}
				</h3>
				<div class="flex-1 min-h-0 overflow-y-auto">
					<ul class="pt-1 pb-2 px-3">
						{#each tasks as {task_name, created_at, task_type, route}}
							<li class="mt-3">
								<a
									class="block p-5 bg-white rounded-md shadow"
									href="{route}">
									<div class="flex justify-between">
										<p
											class="text-sm font-medium
											leading-snug text-gray-900">
											{task_name}
										</p>
										<span>
											<img
												class="h-6 w-6 rounded-full"
												src="1.png"
												alt="Issue" />
										</span>
									</div>
									<div
										class="flex justify-between
										items-baseline">
										<div class="text-sm text-gray-600">
											<time datetime="2019-09-14">
												{created_at}
											</time>
										</div>
										<div class="mt-2">
											<span
												class="px-2 py-1 leading-tight
												inline-flex items-center
												bg-teal-100 rounded">
												<svg
													class="h-2 w-2 text-teal-500"
													viewBox="0 0 8 8"
													fill="currentColor">
													<circle
														cx="4"
														cy="4"
														r="3"></circle>
												</svg>
												<span
													class="ml-2 text-sm
													font-medium text-teal-900">
													{task_type}
												</span>
											</span>
										</div>
									</div>
								</a>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		{/each}

	</main>
</div>

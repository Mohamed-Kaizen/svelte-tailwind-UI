<script>
	const notifications = [
		{
			repo: "tiangolo/fastapi",
			number: "#2035",
			info:
				"Fix to allow custom middleware HTTPExceptions to be propagated throught",
			peoples: [
				"https://avatars1.githubusercontent.com/u/23500353?s=88&u=e2e1d736f924d9be81e8bfc565b6d8836ba99773&v=4",
				"https://avatars2.githubusercontent.com/in/254?s=88&v=4",
				"https://avatars2.githubusercontent.com/in/15368?s=88&v=4",
			],
			type: "subscribed",
			comment: "+7",
			time: "13 minutes ago",
		},

		{
			repo: "samuelcolvin/pydantic",
			number: "#1686",
			info:
				"Add pickle support to dynamically created models and generics",
			peoples: [
				"https://avatars2.githubusercontent.com/u/16523229?s=120&v=4",
				"https://avatars2.githubusercontent.com/u/36469655?s=120&v=4",
			],
			type: "subscribed",
			comment: "+10",
			time: "3 hours ago",
		},
		{
			repo: "sveltejs/svelte",
			number: "#5339",
			info:
				"Adding the possibility to change intro:true only for a specific component.",
			peoples: [
				"https://avatars3.githubusercontent.com/u/67280678?s=60&v=4",
				"https://avatars1.githubusercontent.com/u/12937446?s=120&v=4",
				"https://avatars1.githubusercontent.com/u/6438760?s=120&v=4",
			],
			type: "subscribed",
			comment: "+3",
			time: "7 hours ago",
		},
		{
			repo: "tortoise/tortoise-orm",
			number: "#498",
			info: "Add custom attribute name for Prefetch instruction",
			peoples: [
				"https://avatars1.githubusercontent.com/u/2354108?s=60&v=4",
				"https://avatars0.githubusercontent.com/u/13377178?s=120&v=4",
			],
			type: "subscribed",
			comment: "+5",
			time: "5 hours ago",
		},
		{
			repo: "pytest-dev/pytest",
			number: "#7718",
			info: "Release 6.0.2",
			peoples: [
				"https://avatars3.githubusercontent.com/u/1085180?s=120&v=4",
				"https://avatars0.githubusercontent.com/u/1223550?s=120&v=4",
				"https://avatars0.githubusercontent.com/u/1324225?s=120&v=4",
			],
			type: "subscribed",
			comment: "+10",
			time: "4 hours ago",
		},
		{
			repo: "jazzband/django-oauth-toolkit",
			number: "#862",
			info: "Passing None into middleware is deprecated",
			peoples: [
				"https://avatars0.githubusercontent.com/u/2354108?s=120&v=4",
				"https://avatars3.githubusercontent.com/u/6212603?s=120&v=4",
				"https://avatars2.githubusercontent.com/u/39445562?s=120&v=4",
			],
			type: "subscribed",
			comment: "+7",
			time: "4 hours ago",
		},
	]
</script>

<div
	class="h-12 mt-10 lg:mt-4 py-3 pr-4 pl-6 flex items-center border
		md:rounded-t-lg border-gray-400 bg-gray-100">
	<input id="select_all" type="checkbox" />
	<label for="#select_all" class="ml-2 font-semibold text-xs">Select all</label>
</div>

<ul>
	{#each notifications as {repo, number, info, peoples, type, comment, time}}
		<li
			class="md:h-32 lg:h-16 p-2 flex items-start lg:items-center
				justify-between border border-t-0 border-gray-400
				hover:bg-indigo-100">
			<div
				class="flex flex-col lg:flex-row lg:items-center
					lg:justify-between w-3/4">
				<!-- Left section -->

				<div class="flex items-center relative">
					<!-- Left side -->

					<span
						class="absolute w-2 h-2 rounded-full bg-blue-500"></span>

					<input class="ml-4" id="select_all" type="checkbox" />

					<svg
						class="w-4 h-4 ml-2 fill-current"
						viewBox="0 0 16 16"
						version="1.1"
						aria-hidden="true"><path
							fill-rule="evenodd"
							d="M5 3.254V3.25v.005a.75.75 0 110-.005v.004zm.45 1.9a2.25 2.25 0 10-1.95.218v5.256a2.25 2.25 0 101.5 0V7.123A5.735 5.735 0 009.25 9h1.378a2.251 2.251 0 100-1.5H9.25a4.25 4.25 0 01-3.8-2.346zM12.75 9a.75.75 0 100-1.5.75.75 0 000 1.5zm-8.5 4.5a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg>

					<div class="ml-2">
						<h5 class="text-xs">{repo} {number}</h5>

						<p class="text-sm">{info}</p>

						<div class="ml-3 mt-4 lg:hidden flex items-end">
							<!-- Small screen -->
							<div class="flex items-center">
								{#each peoples as profile, index}
									<span class="-ml-3 rounded-full">
										<img
											class="h-6 w-6 rounded-full
												object-cover"
											src="{profile}"
											alt="{index}" />
									</span>
								{/each}
							</div>

							<span class="ml-5 px-2 text-xs">{type}</span>
						</div>
					</div>
				</div>

				<div class="hidden lg:block">
					<!-- Right side -->
					<span class="px-2">{comment}</span>
				</div>
			</div>

			<div class="lg:w-64 flex items-center justify-between text-xs">
				<!-- Right section -->

				<span class="hidden lg:inline-block">{type}</span>

				<div class="hidden lg:inline-flex items-center">
					{#each peoples as profile, index}
						<span class="-ml-3 rounded-full border-2 border-white">
							<img
								class="h-6 w-6 rounded-full object-cover"
								src="{profile}"
								alt="{index}" />
						</span>
					{/each}
				</div>

				<span>{time}</span>
			</div>
		</li>
	{/each}
</ul>

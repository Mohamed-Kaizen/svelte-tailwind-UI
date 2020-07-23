<script>
	const projects = [
		["Expenses Dashboard", "expense.png", "expenses-dashboard/"],
		["User Dashboard", "user-dashboard.png", "users-dashboard/"],
		[
			"Social Media Dashboard",
			"social_media_dashboard.png",
			"social-media-dashboard/",
		],
		["Teacher Dashboard", "teacher_dashboard.png", "teacher-dashboard/"],
		["Events Dashboard", "events_dashboard.png", "events-dashboard/"],
		[
			"Blood Donate Dashboard",
			"blood_donate_dashboard.png",
			"blood-donate-dashboard/",
		],
		["Jobs List", "job_list.png", "jobs-list/"],
	]
</script>

<svelte:head>
	<title>svelte tailwind UI</title>
</svelte:head>

<div
	class="container mx-auto p-8 flex flex-row flex-wrap justify-between
	capitalize">

	<div class="m-8 shadow px-6 py-2 text-blue-500 bg-white">
		<a href="/meetup/">Meetup</a>

	</div>

	<div class="m-8 shadow px-6 py-2 bg-white">
		<a class="text-blue-500" href="/inbox/">Inbox</a>

	</div>

	<div class="m-8 shadow px-6 py-2 bg-white">
		<a class="text-blue-500" href="issues-dashboard/">issues Dashboard</a>

	</div>

	{#each projects as [name, image, link]}
		<div
			class="m-8 shadow px-6 py-2 flex items-center text-blue-500 bg-white">

			<a href="{image}/" target="blank">
				<img
					class="h-10 w-10 mr-3 rounded-full"
					src="{image}/"
					alt="{name}" />
			</a>

			<a href="{link}">{name}</a>

		</div>
	{/each}

</div>

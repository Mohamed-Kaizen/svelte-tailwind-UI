<script>
	import TopNavBar from "../components/random/top_navbar.svelte"

	const projects = [
		["Meetup", "meetup.png", "meetup/"],
		["Inbox", "inbox.png", "inbox/"],
		["Issue Dashboard", "issue_dashboard.png", "issues-dashboard/"],
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
		[
			"Github Notifications",
			"github_notifications.png",
			"github-notifications/",
		],
	]
</script>

<svelte:head>
	<title>svelte tailwind UI</title>
</svelte:head>

<TopNavBar />

<div
	class="container mx-auto p-8 flex flex-row flex-wrap justify-between
		capitalize">
	{#each projects as [name, image, link]}
		<div
			class="flex flex-col justify-center items-center max-w-sm mx-auto
				my-8">
			<img
				src="{image}/"
				class="bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover
					bg-center"
				alt="{name}" />
			<div
				class="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg
					overflow-hidden">
				<div
					class="py-2 text-center font-bold uppercase tracking-wide
						text-gray-800">
					{name}
				</div>
				<div
					class="flex items-center justify-center py-2 px-3 bg-gray-400">
					<a
						href="{link}"
						class="bg-gray-800 text-xs text-white px-2 py-1
							font-semibold rounded uppercase hover:bg-gray-700">
						check it out
					</a>
				</div>
			</div>
		</div>
	{/each}
</div>

<script>
	import TopNavBar from "../../components/github-notifications/top_navbar.svelte"
	import SideBar from "../../components/github-notifications/sidebar.svelte"
	import NotificationsHeader from "../../components/github-notifications/header.svelte"
	import NotificationsList from "../../components/github-notifications/list.svelte"
	import NotificationsFooter from "../../components/github-notifications/footer.svelte"
</script>

<div class="h-screen w-full select-none">
	<TopNavBar />

	<div class="flex">
		<SideBar />

		<main class="flex flex-col flex-1">
			<div class="px-4 py-2 md:py-4">
				<NotificationsHeader />
			</div>

			<div class="md:px-4">
				<NotificationsList />
			</div>

			<div
				class="mt-6 md:px-4 flex flex-col lg:flex-row items-center
					justify-between">
				<NotificationsFooter />
			</div>
		</main>
	</div>
</div>

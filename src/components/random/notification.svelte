<script>
	import {onDestroy} from "svelte"
	import {fly} from "svelte/transition"

	export let message,
		sub_message,
		timeout = 5,
		visible = false
	let timerId

	$: if (visible === true) {
		clearTimeout(timerId)
		timerId = undefined
		if (timeout > 0) {
			timerId = setTimeout(() => {
				visible = false
				timerId = undefined
			}, timeout * 1000)
		}
	}
	onDestroy(() => {
		clearTimeout(timerId)
		timerId = undefined
	})
</script>

<div
	class="bg-white shadow-lg rounded-lg pointer-events-auto mb-4"
	in:fly="{{x: 200, duration: 500}}"
	out:fly="{{x: 200, duration: 500}}">

	<div class="rounded-lg shadow-xs overflow-hidden">

		<div class="p-4">

			<div class="flex items-start">

				<div class="flex-shrink-0 text-red-500">

					<slot name="left-icon">

						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="feather feather-trash">
							<polyline points="3 6 5 6 21 6"></polyline>
							<path
								d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3
								0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
						</svg>
					</slot>

				</div>

				<div class="ml-3 w-0 flex-1 pt-1">

					<p class="text-sm leading-5 font-medium text-gray-900">
						{message}
					</p>

					<p class="mt-1 text-sm leading-5 text-gray-500">
						{sub_message}
					</p>

				</div>
				<div class="ml-4 flex-shrink-0 flex">

					<button
						on:click="{() => (visible = false)}"
						class="inline-flex text-gray-400 focus:outline-none
						focus:text-gray-400">
						<slot name="right-icon">

							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2">
								<path
									d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41
									10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19
									17.59 13.41 12 19 6.41z"></path>
							</svg>

						</slot>

					</button>

				</div>
			</div>
		</div>
	</div>
</div>

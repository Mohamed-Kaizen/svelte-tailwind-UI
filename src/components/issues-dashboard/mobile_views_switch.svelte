<script>
	export let view_type

	function col_view() {
		view_type = true
	}

	function row_view() {
		view_type = false
	}
</script>

<div class="flex px-4 p-1 border-t bg-gray-200 sm:hidden">

	<button
		on:click="{row_view}"
		class="inline-flex items-center justify-center w-1/2 px-2 py-1 rounded {view_type ? '' : 'bg-white shadow'}">
		<svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
			<path d="M4 5v2h17V5M4 11h17V9H4m0 10h17v-2H4m0-2h17v-2H4v2z"></path>
		</svg>

		<span class="ml-2 text-sm font-medium text-gray-900">List</span>
	</button>

	<button
		on:click="{col_view}"
		class="inline-flex items-center justify-center w-1/2 py-1 rounded {view_type ? 'bg-white shadow' : ''}">
		<svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
			<path
				d="M4 5v13h17V5H4m10 2v9h-3V7h3M6 7h3v9H6V7m13 9h-3V7h3v9z"></path>
		</svg>

		<span class="ml-2 text-sm font-medium text-gray-900">Board</span>
	</button>
</div>

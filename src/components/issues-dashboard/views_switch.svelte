<script>
	export let view_type

	function col_view() {
		view_type = true
	}

	function row_view() {
		view_type = false
	}
</script>

<span class="hidden sm:inline-flex p-1 border bg-gray-200 rounded-md">

	<button
		on:click="{row_view}"
		class="px-2 py-1 rounded {view_type ? '' : 'bg-white shadow'}">
		<svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
			<path d="M4 5v2h17V5M4 11h17V9H4m0 10h17v-2H4m0-2h17v-2H4v2z"></path>
		</svg>
	</button>

	<button
		on:click="{col_view}"
		class="px-2 py-1 rounded {view_type ? 'bg-white shadow' : ''}">
		<svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
			<path
				d="M4 5v13h17V5H4m10 2v9h-3V7h3M6 7h3v9H6V7m13 9h-3V7h3v9z"></path>
		</svg>
	</button>

</span>

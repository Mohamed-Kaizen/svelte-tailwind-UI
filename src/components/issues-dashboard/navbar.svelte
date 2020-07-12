<script>
	export let drawer
</script>

<div class="flex justify-between items-center py-3 border-b border-gray-200">
	<div class="flex-1 min-w-0 flex">
		<button
			on:click="{() => (drawer = !drawer)}"
			class="text-gray-600 lg:hidden">
			<svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
				<path d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2z"></path>
			</svg>
		</button>
		<div class="flex-shrink-1 ml-3 relative w-64 lg:ml-0">
			<span class="absolute inset-y-0 left-0 flex items-center">
				<svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
					<path
						d="M15.5 14l5 5-1.5 1.5-5-5v-.79l-.27-.28A6.471 6.471 0
						019.5 16 6.5 6.5 0 013 9.5 6.5 6.5 0 019.5 3 6.5 6.5 0
						0116 9.5c0 1.61-.59 3.09-1.57
						4.23l.28.27h.79m-6-9.5l-.55.03c-.24.52-.61 1.4-.88
						2.47h2.86c-.27-1.07-.64-1.95-.88-2.47-.18-.03-.36-.03-.55-.03M13.83
						7a4.943 4.943 0 00-2.68-2.22c.24.53.55 1.3.78
						2.22h1.9M5.17 7h1.9c.23-.92.54-1.69.78-2.22A4.943 4.943 0
						005.17 7M4.5 9.5c0 .5.08 1.03.23
						1.5h2.14l-.12-1.5.12-1.5H4.73c-.15.47-.23 1-.23 1.5m9.77
						1.5c.15-.47.23-1 .23-1.5s-.08-1.03-.23-1.5h-2.14a9.48
						9.48 0 010 3h2.14m-6.4-3l-.12 1.5.12 1.5h3.26a9.48 9.48 0
						000-3H7.87m1.63 6.5c.18 0 .36 0
						.53-.03.25-.52.63-1.4.9-2.47H8.07c.27 1.07.65 1.95.9
						2.47l.53.03m4.33-2.5h-1.9c-.23.92-.54 1.69-.78 2.22A4.943
						4.943 0 0013.83 12m-8.66 0a4.943 4.943 0 002.68
						2.22c-.24-.53-.55-1.3-.78-2.22h-1.9z"></path>
				</svg>
			</span>
			<input
				type="text"
				aria-label="search"
				class="block w-full rounded-md border border-gray-400 pl-10 pr-4
				py-2 text-sm placeholder-gray-600"
				placeholder="Search..." />

		</div>
	</div>

	<div class="ml-6 flex-shrink-0 flex items-center">
		<svg class="h-5 w-5 fill-current" viewBox="0 0 24 24">
			<path
				d="M12 20a7 7 0 01-7-7 7 7 0 017-7 7 7 0 017 7 7 7 0 01-7
				7m0-16a9 9 0 00-9 9 9 9 0 009 9 9 9 0 009-9 9 9 0 00-9-9m.5
				4H11v6l4.75 2.85.75-1.23-4-2.37V8M7.88 3.39L6.6 1.86 2 5.71l1.29
				1.53 4.59-3.85M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72z"></path>
		</svg>
		<img
			class="ml-6 h-6 w-6 rounded-full object-cover"
			src="1.png"
			alt="User Profile" />
	</div>

</div>

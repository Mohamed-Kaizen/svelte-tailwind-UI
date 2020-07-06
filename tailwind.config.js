module.exports = {
	purge: {
		content: ["./src/**/*.svelte", "./src/**/*.html"],
		options: {
			whitelist: ["mode-dark"],
		},
	},
	theme: {
		extend: {},
	},
	variants: {
		backgroundColor: [
			"responsive",
			"dark",
			"dark-hover",
			"hover",
			"dark-focus",
			"focus",
		],
		borderColor: [
			"responsive",
			"dark",
			"dark-focus",
			"focus",
			"dark-hover",
			"hover",
		],
		borderWidth: [
			"responsive",
			"dark",
			"dark-focus",
			"focus",
			"dark-hover",
			"hover",
		],
		textColor: [
			"responsive",
			"dark",
			"dark-hover",
			"hover",
			"dark-focus",
			"focus",
		],
	},
	plugins: [require("tailwindcss-dark-mode")()],
}

export function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms))
}

export function match_path(str, route) {
	const regex = /^\/([^?\/]+)/
	const matched = route.match(regex)
	if (str === undefined && matched !== null) {
		return route === `${matched[0]}/`
	} else {
		return route.search(str) === 8
	}
}

export function get_path(str) {
	const regex = /^\/([^?\/]+)/
	const matched = str.match(regex)
	if (matched !== null) {
		return matched[1]
	}
}

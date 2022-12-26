import { PUBLIC_API_URL } from '$env/static/public'

export async function load({ fetch }) {
	const res = await fetch(`${PUBLIC_API_URL}/get`, {
		headers: {
			'Content-Type': 'application/json'
		}
	})

	const counters = await res.json()

	return { counters }
}

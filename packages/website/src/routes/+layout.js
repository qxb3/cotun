import { PUBLIC_API_URL } from '$env/static/public'
import { goto } from '$app/navigation'
import userStore from '$lib/stores/user.js'

export const load = async ({ url }) => {
	if (url.pathname === '/dashboard') {
		const res = await fetch(`${PUBLIC_API_URL}/_user/get`, {
			headers: {
				'Content-Type': 'application/json'
			}
		})
		const data = await res.json()

		if (res.status !== 200) {
			return goto('/login')
		}

		const { username, apiKey } = data
		userStore.set({
			username,
			apiKey
		})
	}

	return {
		pathname: url.pathname
	}
}

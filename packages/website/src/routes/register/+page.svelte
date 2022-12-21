<script>
  import { PUBLIC_API_URL } from '$env/static/public'
  import { goto } from '$app/navigation';
  import userStore from '$lib/stores/user.js'

  let username = ''
  let password = ''
  let confirmPassword = ''

  let usernameErr = ''
  let passwordErr = ''
  let confirmPasswordErr = ''

  async function register() {
    if (!username) return usernameErr = 'Username cannot be empty'
    if (!password) return passwordErr = 'Password cannot be empty'
    if (!confirmPassword) return confirmPasswordErr = 'You need to confirm your password'
    if (password !== confirmPassword) return confirmPasswordErr = 'Confirm password doesn\'t match'

    const res = await fetch(`${PUBLIC_API_URL}/_user/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })

    const data = await res.json()

    if (res.status !== 200) {
      return usernameErr = data.message
    }

    goto('/dashboard')

    usernameErr = ''
    passwordErr = ''
    confirmPasswordErr = ''
  }
</script>

<svelte:head>
  <title>Register</title>
</svelte:head>

<div class="container p-3">
  <h1 class="text-3xl text-center my-12">Register</h1>

  <form on:submit|preventDefault={register} class="grid place-items-center w-full">
    <div class="w-full max-w-lg">
      <div class="space-y-3">
        <div>
          <input bind:value={username} class="w-full input" class:danger={usernameErr} type="text" placeholder="Username">
          {#if usernameErr}
            <p class="danger">{usernameErr}</p>
          {/if}
        </div>

        <div>
          <input bind:value={password} class="w-full input" class:danger={passwordErr} type="password" placeholder="Password">
          {#if passwordErr}
            <p class="danger">{passwordErr}</p>
          {/if}
        </div>

        <div>
          <input bind:value={confirmPassword} class="w-full input" class:danger={confirmPasswordErr} type="password" placeholder="Confirm Password">
          {#if confirmPasswordErr}
            <p class="danger">{confirmPasswordErr}</p>
          {/if}
        </div>
      </div>

      <button class="button mt-3 w-full" class:danger={usernameErr || passwordErr || confirmPasswordErr} type="submit">Register</button>
    </div>
  </form>

  <div class="text-center mt-12">
    <p>
      Already have an account?
      <a class="underline" href="/login">Sign In!</a>
    </p>
  </div>
</div>

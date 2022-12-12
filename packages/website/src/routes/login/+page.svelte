<script>
  let username = ''
  let password = ''

  let usernameErr = ''
  let passwordErr = ''

  function login() {
    if (!username) return usernameErr = 'Username cannot be empty'
    if (!password) return passwordErr = 'Password cannot be empty'

    usernameErr = ''
    passwordErr = ''
  }
</script>

<svelte:head>
  <title>Login</title>
</svelte:head>

<div class="container p-3">
  <h1 class="text-3xl text-center my-12">Login</h1>

  <form on:submit|preventDefault={login} class="grid place-items-center w-full">
    <div class="w-full max-w-lg">
      <div class="space-y-3">
        <div>
          <input bind:value={username} class="input w-full" class:danger={usernameErr} type="text" placeholder="Username">
          {#if usernameErr}
            <p class="danger">{usernameErr}</p>
          {/if}
        </div>

        <div>
          <input bind:value={password} class="input w-full" class:danger={passwordErr} type="password" placeholder="Password">
          {#if passwordErr}
            <p class="danger">{passwordErr}</p>
          {/if}
        </div>
      </div>

      <button class="button mt-3 w-full" type="submit">Login</button>
    </div>
  </form>

  <div class="text-center mt-12">
    <p>
      Don't have an account?
      <a class="underline" href="/register">Sign Up!</a>
    </p>
  </div>
</div>

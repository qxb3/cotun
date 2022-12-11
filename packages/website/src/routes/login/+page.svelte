<script>
  function login() {
    console.log('Login')
  }
</script>

<div class="container p-3">
  <h1 class="text-3xl text-center my-12">Login</h1>

  <form on:submit|preventDefault={login} class="grid place-items-center w-full">
    <div>
      <div class="space-y-3">
        <input class="w-full" type="text" placeholder="Username">
        <input class="w-full" type="password" placeholder="Password">
      </div>

      <button class="button mt-3 w-full" type="submit">Login</button>
    </div>
  </form>
</div>

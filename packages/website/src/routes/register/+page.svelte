<script>
  function register() {
    console.log('Register')
  }
</script>

<div class="container p-3">
  <h1 class="text-3xl text-center my-12">Register</h1>

  <form on:submit|preventDefault={register} class="grid place-items-center w-full">
    <div class="max-w-lg min-w-lg">
      <div class="space-y-3">
        <input class="w-full" type="text" placeholder="Email">
        <input class="w-full" type="text" placeholder="Username">
        <input class="w-full" type="password" placeholder="Password">
      </div>

      <button class="button mt-3 w-full" type="submit">Register</button>
    </div>
  </form>

  <div class="text-center mt-12">
    <p>
      Already have an account?
      <a class="underline" href="/login">Sign In!</a>
    </p>
  </div>
</div>

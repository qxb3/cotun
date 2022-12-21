<script>
  import userStore from '$lib/stores/user.js'

  const links = [
    $userStore.username
      ? { name: 'Dashboard', path: '/dashboard' }
      : null,
    $userStore.username
      ? { name: 'Logout', path: '/logout' }
      : { name: 'Login', path: '/login' },
    { name: 'Docs', path: '/docs' }
  ].filter(v => v !== null)
</script>

<nav class="shadow">
  <div class="container flex justify-between items-center">
    <a href="/" class="p-2">
      <img class="w-11 h-11" src="/cotun.png" alt="Brand Logo">
    </a>

    <div class="grid items-center p-3">
      <ul class="flex gap-6">
        {#each links as { name, path }}
          <li>
            <a class="underline" href={path}>{name}</a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</nav>

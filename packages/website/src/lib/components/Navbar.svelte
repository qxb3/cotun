<script>
</script>

<nav class="shadow">
  <div class="container flex justify-between items-center">
    <a href="/" class="p-2">
      <img class="w-11 h-11" src="/cotun.png" alt="Brand Logo">
    </a>

    <div class="grid place-items-center p-3">
      <ul class="flex gap-6">
        {#each [
          ['/login', 'Login'],
          ['/docs', 'Docs']
        ] as [link, name]}
          <li>
            <a class="underline" href={link}>{name}</a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</nav>

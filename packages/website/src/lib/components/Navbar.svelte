<script>
  let isOpen = false

  function toggleNav() {
    isOpen = !isOpen
  }
</script>

<nav class="shadow">
  <div class="container flex justify-between">
    <div class="p-2">
      <img class="w-11 h-11" src="/cotun.png" alt="Brand Logo">
    </div>

    <div class="grid place-items-center p-3">
      <ul class="flex gap-8">
        <li>
          <a href="/docs">Docs</a>
        </li>

        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

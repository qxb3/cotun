<script>
  import { page } from '$app/stores'
</script>

<div class="mt-16 text-center">
  <h1 class="text-8xl">{$page.status}</h1>
  <p class="text-5xl">{$page.error.message}</p>
</div>

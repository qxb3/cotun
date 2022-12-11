<script>
  const namespaces = [
    {
      name: 'views',
      count: 16
    }
  ]
</script>

<svelte:head>
  <title>Dashboard</title>
</svelte:head>

<div class="container p-3">
  <h1 class="text-3xl mt-3">Dashboard</h1>

  <div class="mt-12">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl">Namespaces:</h1>
      <button class="button bg-green-500 hover:bg-green-600 text-white border-none rounded-md">New +</button>
    </div>

    <div class="mt-6">
      {#each namespaces as { name, count }}
        <div class="flex justify-between border rounded-md my-2 p-2">
          <div>
            <h1>Name: {name}</h1>
            <p>Count: {count}</p>
          </div>

          <div>
            <button class="button">Edit</button>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

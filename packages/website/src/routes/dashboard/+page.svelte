<script>
  import Modal from '$lib/components/Modal.svelte'
  import Alert from '$lib/components/Alert.svelte'

  let counters = [
    {
      name: 'views',
      count: 16
    }
  ]

  let newCounter = false
  let newCounterName = ''
  let newCounterDefaultCount = 0
  let newCounterError = ''

  function saveNewCounter() {
    if (!newCounterName) return newCounterError = 'Name cannot be empty'
    if (counters.some(v => v.name === newCounterName)) return newCounterError = `There is already a counter called ${newCounterName}`

    counters = [{ name: newCounterName, count: newCounterDefaultCount }, ...counters]

    newCounter = false
    newCounterError = ''
  }

  let editCounter = false
  let editCounterName = ''
  let editCounterCount = 0
  let editCounterError = ''

  function openEditCounter(name, count) {
    editCounterName = name
    editCounterCount = count
    editCounter = true
  }

  function saveEditCounter() {
    if (!editCounterName) return editCounterError = 'Name cannot be empty'

    editCounterError = ''
    editCounter = false
  }
</script>

<svelte:head>
  <title>Dashboard</title>
</svelte:head>

<div class="container p-3">
  <h1 class="text-3xl mt-3">Dashboard</h1>

  <div class="mt-12">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl">Counters:</h1>
      <button on:click={() => newCounter = true} class="button success">New +</button>
    </div>

    <div class="mt-6">
      {#each counters as { name, count }}
        <div class="flex justify-between border rounded-md my-2 p-2">
          <div>
            <h1>Name: {name}</h1>
            <p>Count: {count}</p>
          </div>

          <div>
            <button on:click={() => openEditCounter(name, count)} class="button">Edit</button>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<!-- New Counter Modal -->
<Modal
  open={newCounter}
  on:close={() => newCounter = false}
>
  <svelte:fragment slot="header">
    <h3 class="text-xl font-semibold">New Counter</h3>
  </svelte:fragment>

  <svelte:fragment slot="body">
    {#if newCounterError}
      <Alert
        message={newCounterError}
        type="danger"
        on:close={() => newCounterError = ''}
      />
    {/if}

    <div class="space-y-3">
      <div>
        <p class="font-semibold">Name:</p>
        <input bind:value={newCounterName} class="input w-full" type="text" placeholder="views">
      </div>

      <div>
        <p class="font-semibold">Default Count:</p>
        <input bind:value={newCounterDefaultCount} class="input w-full" type="number" placeholder="0">
      </div>
    </div>
  </svelte:fragment>

  <svelte:fragment slot="footer">
    <button on:click={() => newCounter = false} class="button danger">Cancel</button>
    <button on:click={saveNewCounter} class="button success">Save</button>
  </svelte:fragment>
</Modal>

<!-- Edit Counter Modal -->
<Modal
  open={editCounter}
  on:close={() => editCounter = false}
>
  <svelte:fragment slot="header">
    <h3 class="text-xl font-semibold">Edit Counter</h3>
  </svelte:fragment>

  <svelte:fragment slot="body">
    {#if editCounterError}
      <Alert
        message={editCounterError}
        type="danger"
        on:close={() => editCounterError = ''}
      />
    {/if}

    <div class="space-y-3">
      <div>
        <p class="font-semibold">Name:</p>
        <input bind:value={editCounterName} class="input w-full" type="text" placeholder="Name">
      </div>

      <div>
        <p class="font-semibold">Count:</p>
        <input bind:value={editCounterCount} class="input w-full" type="number" placeholder="Count">
      </div>
    </div>
  </svelte:fragment>

  <svelte:fragment slot="footer">
    <button on:click={() => editCounter = false} class="button danger">Cancel</button>
    <button on:click={saveEditCounter} class="button success">Save</button>
  </svelte:fragment>
</Modal>

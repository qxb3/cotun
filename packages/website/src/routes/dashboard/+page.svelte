<script>
  import Modal from '$lib/components/Modal.svelte'
  import Alert from '$lib/components/Alert.svelte'
  import { PUBLIC_API_URL } from '$env/static/public'

  export let data
  let counters = [...data.counters]

  let newCounter = false
  let newCounterName = ''
  let newCounterStartingCount = 0
  let newCounterError = ''

  async function saveNewCounter() {
    if (!newCounterName) return newCounterError = 'Name cannot be empty'
    if (newCounterName.length < 3) return newCounterError = 'Name must have atleast 3 characters'

    const res = await fetch(`${PUBLIC_API_URL}/create?name=${newCounterName}&count=${newCounterStartingCount}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    })
    const data = await res.json()

    if (res.status !== 200) {
      return newCounterError = data.message
    }

    counters = [...counters, data]

    newCounterName = ''
    newCounterStartingCount = 0
    newCounterError = ''
    newCounter = false
  }

  let editCounter = false
  let editCounterName = ''
  let editCounterCount = 0
  let editCounterError = ''

  async function openEditCounter(name, count) {
    editCounterName = name
    editCounterCount = count
    editCounter = true
  }

  async function saveEditCounter() {
    if (!editCounterName) return editCounterError = 'Name cannot be empty'
    if (editCounterName.length < 3) return editCounterName = 'New name must have atleast 3 characters'

    const res = await fetch(`${PUBLIC_API_URL}/edit?name=${editCounterName}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        newName: editCounterName,
        newCount: editCounterError
      })
    })
    const data = await res.json()

    if (res.status !== 200) {
      return newCounterError = data.message
    }

    editCounterName = ''
    editCounterCount = 0
    editCounterError = ''
    editCounter = false
  }

  let deleteCounter = false
  let deleteCounterName = ''
  let deleteCounterError = ''

  function openDeleteConfirmation(name) {
    deleteCounterName = name
    deleteCounter = true
  }

  async function saveDeleteCounter() {
    const res = await fetch(`${PUBLIC_API_URL}/remove?name=${deleteCounterName}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    })
    const data = await res.json()

    if (res.status !== 200) {
      return deleteCounterError = data.message
    }

    counters = counters.filter(v => v.name !== data.name)

    deleteCounterName = ''
    deleteCounterError = ''
    deleteCounter = false
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
      {#if counters.length <= 0}
        <div class="max-w-sm mx-auto">
          <p class="text-center">You currently dont have any counter. Press the <span class="font-bold">NEW +</span> button to create one :)</p>
        </div>
      {/if}

      {#each counters as { name, count }}
        <div class="flex justify-between border rounded-md my-2 p-2">
          <div>
            <h1>Name: {name}</h1>
            <p>Count: {count}</p>
          </div>

          <div>
            <button on:click={() => openEditCounter(name, count)} class="button">Edit</button>
            <button on:click={() => openDeleteConfirmation(name)} class="button danger">Delete</button>
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
        <p class="font-semibold">Starting Count:</p>
        <input bind:value={newCounterStartingCount} class="input w-full" type="number" placeholder="0">
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
        <p class="font-semibold">New Name:</p>
        <input bind:value={editCounterName} class="input w-full" type="text" placeholder="Name">
      </div>

      <div>
        <p class="font-semibold">New Count:</p>
        <input bind:value={editCounterCount} class="input w-full" type="number" placeholder="Count">
      </div>
    </div>
  </svelte:fragment>

  <svelte:fragment slot="footer">
    <button on:click={() => editCounter = false} class="button danger">Cancel</button>
    <button on:click={saveEditCounter} class="button success">Save</button>
  </svelte:fragment>
</Modal>

<Modal
  open={deleteCounter}
  on:close={() => deleteCounter = false}
>
  <svelte:fragment slot="header">
    <h3 class="text-xl font-semibold">Are you sure?</h3>
  </svelte:fragment>

  <svelte:fragment slot="body">
    {#if deleteCounterError}
      <Alert
        message={deleteCounterError}
        type="danger"
        on:close={() => deleteCounterError = ''}
      />
    {/if}

    <p>
      Are you sure that you want to delete counter: <span class="font-bold">{deleteCounterName}</span>?
      You cannot bring back the counter once you confirm the deletion.
    </p>
  </svelte:fragment>

  <svelte:fragment slot="footer">
    <button on:click={() => deleteCounter = false} class="button success">Cancel</button>
    <button on:click={() => saveDeleteCounter()} class="button danger">Confirm</button>
  </svelte:fragment>
</Modal>

<script>
  import Modal from '$lib/components/Modal.svelte'
  import Alert from '$lib/components/Alert.svelte'

  let namespaces = [
    {
      name: 'views',
      count: 16
    }
  ]

  let newNamespace = false
  let newNamespaceName = ''
  let newNamespaceDefaultCount = 0
  let newNamespaceError = ''

  function saveNewNamespace() {
    if (!newNamespaceName) return newNamespaceError = 'Name cannot be empty'
    if (namespaces.some(v => v.name === newNamespaceName)) return newNamespaceError = `There is already a namespace called ${newNamespaceName}`

    namespaces = [{ name: newNamespaceName, count: newNamespaceDefaultCount }, ...namespaces]

    newNamespace = false
    newNamespaceError = ''
  }

  let editNamespace = false
  let editNamespaceName = ''
  let editNamespaceCount = 0
  let editNamespaceError = ''

  function openEditNamespace(name, count) {
    editNamespaceName = name
    editNamespaceCount = count
    editNamespace = true
  }

  function saveEditNamespace() {
    if (!editNamespaceName) return editNamespaceError = 'Name cannot be empty'

    editNamespaceError = ''
    editNamespace = false
  }
</script>

<svelte:head>
  <title>Dashboard</title>
</svelte:head>

<div class="container p-3">
  <h1 class="text-3xl mt-3">Dashboard</h1>

  <div class="mt-12">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl">Namespaces:</h1>
      <button on:click={() => newNamespace = true} class="button success">New +</button>
    </div>

    <div class="mt-6">
      {#each namespaces as { name, count }}
        <div class="flex justify-between border rounded-md my-2 p-2">
          <div>
            <h1>Name: {name}</h1>
            <p>Count: {count}</p>
          </div>

          <div>
            <button on:click={() => openEditNamespace(name, count)} class="button">Edit</button>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<!-- New Namespace Modal -->
<Modal
  open={newNamespace}
  on:close={() => newNamespace = false}
>
  <svelte:fragment slot="header">
    <h3 class="text-xl font-semibold">New Namespace</h3>
  </svelte:fragment>

  <svelte:fragment slot="body">
    {#if newNamespaceError}
      <Alert
        message={newNamespaceError}
        type="danger"
        on:close={() => newNamespaceError = ''}
      />
    {/if}

    <div class="space-y-3">
      <div>
        <p class="font-semibold">Name:</p>
        <input bind:value={newNamespaceName} class="w-full" type="text" placeholder="views">
      </div>

      <div>
        <p class="font-semibold">Default Count:</p>
        <input bind:value={newNamespaceDefaultCount} class="w-full" type="number" placeholder="0">
      </div>
    </div>
  </svelte:fragment>

  <svelte:fragment slot="footer">
    <button on:click={() => newNamespace = false} class="button danger">Cancel</button>
    <button on:click={saveNewNamespace} class="button success">Save</button>
  </svelte:fragment>
</Modal>

<!-- Edit Namespace Modal -->
<Modal
  open={editNamespace}
  on:close={() => editNamespace = false}
>
  <svelte:fragment slot="header">
    <h3 class="text-xl font-semibold">Edit Namespace</h3>
  </svelte:fragment>

  <svelte:fragment slot="body">
    {#if editNamespaceError}
      <Alert
        message={editNamespaceError}
        type="danger"
        on:close={() => editNamespaceError = ''}
      />
    {/if}

    <div class="space-y-3">
      <div>
        <p class="font-semibold">Name:</p>
        <input bind:value={editNamespaceName} class="w-full" type="text" placeholder="Name">
      </div>

      <div>
        <p class="font-semibold">Count:</p>
        <input bind:value={editNamespaceCount} class="w-full" type="number" placeholder="Count">
      </div>
    </div>
  </svelte:fragment>

  <svelte:fragment slot="footer">
    <button on:click={() => editNamespace = false} class="button danger">Cancel</button>
    <button on:click={saveEditNamespace} class="button success">Save</button>
  </svelte:fragment>
</Modal>

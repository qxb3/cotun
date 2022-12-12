<script>
  import { createEventDispatcher } from 'svelte'

  export let message
  export let type = "default"
  let style = ''

  if (type === 'default') {
    style = 'bg-gray-400'
  }

  if (type === 'success') {
    style = 'bg-green-500'
  }

  if (type === 'danger') {
    style = 'bg-red-500'
  }

  const dispatch = createEventDispatcher()
</script>

<div class="{style} flex items-center p-2 my-3 text-center text-white rounded-md">
  <p>{message}</p>

  <button on:click={() => dispatch('close')} class="text-white bg-transparent hover:bg-gray-600 rounded-lg text-sm p-0.5 ml-auto inline-flex items-center">
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  </button>
</div>

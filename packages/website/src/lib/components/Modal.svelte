<script>
  import { createEventDispatcher } from 'svelte'

  export let open = false
  const dispatch = createEventDispatcher()
</script>

{#if open}
  <div class="modal z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center p-8 lg:p-0">
    <div class="modal-overlay fixed w-full h-full bg-gray-900 opacity-50"></div>

    <div class="bg-white w-full h-max max-w-xl mx-auto rounded-lg shadow-xl z-50 overflow-y-auto">
      <div class="flex justify-center items-center bg-gray-100 p-5 border-b text-2xl font-extrabold">
        <slot name="header" />

        <button on:click={() => dispatch('close')} class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div>

      <div class="p-5">
        <slot name="body" />
      </div>

      <div class="flex justify-start items-center gap-5 bg-gray-100 p-5 border-t">
        <slot name="footer" />
      </div>
    </div>

  </div>
{/if}

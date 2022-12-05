<script>
  import Code from './lib/components/Code.svelte'
  import Footer from './lib/components/Footer.svelte'

  import { usages } from './lib/codes.js'
</script>

<main>
  <div class="text-center py-16 bg-lime-400">
    <h1 class="text-4xl md:text-7xl text-blue-400">cotun</h1>
    <p class="text-xl md:text-4xl text-white">A counter as a service!</p>
  </div>

  <div class="container px-3">
    <section>
      <h1>Live Example:</h1>
      <p>This website has been visted over 69 times and the button below has been</p>
      <button class="primary">clicked 69 times</button>
    </section>

    <section>
      <h1>Usage:</h1>
      <p>Using this counter is really easy and simple! You can choose between using the api or using the js sdk we provided.</p>

      <div class="mt-8">
        <h2>Using our api using axios:</h2>
        <Code code={usages.axios} lang="javascript" />
      </div>

      <div class="mt-8">
        <h2 class="mt-8">Using @cotun/js:</h2>
        <Code code={usages['@cotun/js']} lang="javascript" />
      </div>
    </section>
  </div>
</main>

<Footer />

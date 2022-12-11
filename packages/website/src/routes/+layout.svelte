<script>
  import '../app.css'

  import Navbar from '$lib/components/Navbar.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import PageTransition from '$lib/components/PageTransition.svelte'

  export let data
</script>

<Navbar />

<PageTransition pathname={data.pathname}>
  <slot />
  <Footer />
</PageTransition>


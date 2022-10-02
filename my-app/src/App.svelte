<script lang="ts">
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import RandomFacts from "./components/RandomFacts.svelte";
  import AboutMe from "./components/AboutMe.svelte";

  let numFacts = 10;
  let x = 0;
</script>

<main>
  <Header />
  <AboutMe />
  <RandomFacts {numFacts} />
  <Footer />
</main>

<style>
</style>

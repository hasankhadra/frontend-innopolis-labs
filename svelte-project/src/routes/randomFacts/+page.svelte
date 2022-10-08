<script lang="ts">
	import Footer from '../Footer.svelte';
	import Header from '../Header.svelte';
	import RandomFacts from './RandomFacts.svelte';
	// import './styles.css';
	let numFacts = 10;
</script>

<svelte:head>
	<title>Random Facts</title>
</svelte:head>

<main>
	<Header />
	<RandomFacts {numFacts} />
	<Footer />
</main>

<style>
</style>

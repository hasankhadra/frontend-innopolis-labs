<script lang="ts">
	import Footer from '../Footer.svelte';
	import Header from '../Header.svelte';
	import RandomFacts from './RandomFacts.svelte';
	let numFacts = 10;
</script>

<svelte:head>
	<title>Random Facts</title>
</svelte:head>

<div>
	<Header />
	<RandomFacts {numFacts} />
	<Footer />
</div>

<style>
</style>

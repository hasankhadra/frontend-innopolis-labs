<script lang="ts">
	import Footer from '../Footer.svelte';
	import Header from '../Header.svelte';
	import Quotes from './Quotes.svelte';

	let numQuotes = 5;
</script>

<svelte:head>
	<title>Random Facts</title>
</svelte:head>

<div>
	<Header />
	<Quotes numQuotes={numQuotes}/>
	<Footer />
</div>

<style>
</style>

<script lang="ts">
	import Footer from '../Footer.svelte';
	import Header from '../Header.svelte';
	import Quotes from './Quotes.svelte';

	let numQuotes = 0;
</script>

<svelte:head>
	<title>Random Quotes</title>
</svelte:head>

<div>
	<Header />
	<Quotes {numQuotes} />
	<Footer />
</div>

<style>
</style>

<script lang="ts">
	import getQuoteOfTheDay from '../../stores/getQuoteOfTheDay';
	import { onMount } from 'svelte';

	export let numQuotes: number;

	let quotes: Array<string> = [];

	onMount(async () => {
		quotes = await getQuoteOfTheDay(numQuotes);
	});
</script>

<div id="quotes">
	<h2>Famous Quotes</h2>
	{#each quotes as element}
		<div>
			{element}
			<img
				src="https://www.freeiconspng.com/thumbs/idea-icon/ideas-light-bulb-icon-16.png"
				alt="idea icon"
			/>
		</div>
	{:else}
		<p>loading...</p>
	{/each}
</div>

<style>
	#quotes {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	#quotes > div {
		margin-top: 14px;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	img {
		width: 50px;
	}
</style>

<script lang="ts">
  import { onMount } from "svelte";
  import getRandomFacts from "../stores/randomFacts";

  export let numFacts: number;

  let facts: string[] = [];

  onMount(async () => {
    facts = await getRandomFacts(numFacts);
  });
</script>

<div id="random-facts">
  <h2>Random facts</h2>
  {#each facts as element}
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
  #random-facts {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #random-facts > div {
    margin-top: 14px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
</style>

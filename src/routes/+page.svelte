<script lang="ts">
  import type { PageData } from "./$types";
  import PokemanCard from "../components/Card.svelte";

  export let data: PageData;
  let searchTerm = "";
</script>

<svelte:head />
<h1
  class="text-4xl text-center my-8 uppercase flex items-center justify-center"
>
  <img
    class="h-20 w-auto"
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png"
    alt=""
  />
  <span class="ml-2"> Pokedex </span>
</h1>
<input
  bind:value={searchTerm}
  class="w-full rounded-md text-lg p-4 border-2 my-4 py-2 focus:border-[#f44336] focus:outline-none"
  type="text"
  name=""
  placeholder="Search for Pokemon"
  id=""
/>
<div class="grid gap-4 md:grid-cols-2 grid-cols-1">
  {#each data.fetchedPokemon as pokemon}
  <a
    class="flex flex-col items-center p-6 bg-emerald-50 shadow-md rounded-md"
	  href={`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`}
  >
    <img
      class="object-contain h-32 w-auto"
      src={pokemon.image}
      alt={pokemon.name}
    />
    <h2 class="">
      <span class="text-[#f44336] text-xl">
        {pokemon.id}.
      </span>

      <span class="text-2xl uppercase">
        {pokemon.name}
    </span>
    </h2>
      </a>
      {/each}
</div>

<script>
	import { fetchPokemon, pokemon } from '../stores/pokestore';
	import PokemanCard from '../components/PokemanCard.svelte';

	let searchTerm = '';
	let filteredPokemon = [];

	$: {
		if (searchTerm) {
			filteredPokemon = $pokemon.filter((poke) =>
				poke.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
		} else {
			filteredPokemon = [...$pokemon];
		}
	}
	fetchPokemon();
</script>

<svelte:head />
<h1 class="text-4xl text-center my-8 uppercase flex items-center justify-center">
	<img
		class="h-20 w-auto"
		src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png"
		alt=""
	/> <span class="ml-2"> Pokedex </span>
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
	{#each filteredPokemon as pokeman}
		<PokemanCard {pokeman} />
	{/each}
</div>

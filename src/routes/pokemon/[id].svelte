<script context="module" lang="ts">
	import { getPokemonById } from '@/stores/pokestore';
	import type { Pokeman } from '@/types/types';
	export async function load({ params }) {
		const { id } = params;
		const pokeman = await getPokemonById(id);
		return {
			props: {
				pokeman
			}
		};
	}
</script>

<script lang="ts">
	export let pokeman: Pokeman;
	const type = pokeman?.types[0].type.name;
</script>

<svelte:head>
	<title>Pokedex - {pokeman.name}</title>
</svelte:head>

<div class="flex flex-col items-center justify-center">
	<h1 class="text-4xl text-center my-8 uppercase">{pokeman.name}</h1>
	<p>
		Type: <strong class="capitalize text-[#f44336]">{type}</strong> | Height:
		<strong class="text-[#f44336]">{pokeman.height}</strong>
		| Weight: <strong class="text-[#f44336]">{pokeman.weight}</strong>
	</p>
	<img class="h-32 w-auto" src={pokeman.sprites['front_default']} alt={pokeman.name} />
</div>

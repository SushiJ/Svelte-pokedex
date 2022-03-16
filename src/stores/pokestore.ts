import type { Pokemon } from '@/types/types';
import { writable } from 'svelte/store';

export const pokemon = writable([]);
const pokemonDetails = {};
let loaded = false;

export const fetchPokemon = async () => {
	const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
	const res = await fetch(url);
	const data: Pokemon = await res.json();
	const fetchedPokemon = data.results.map((data, idx) => {
		return {
			name: data.name,
			id: idx + 1,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
				idx + 1
			}.png`
		};
	});
	pokemon.set(fetchedPokemon);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	loaded = true;
};

export const getPokemonById = async (id) => {
	if (pokemonDetails[id]) return pokemonDetails[id];

	try {
		const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
		const res = await fetch(url);
		const data = await res.json();
		pokemonDetails[id] = data;
		return data;
	} catch (err) {
		console.error(err);
		return null;
	}
};

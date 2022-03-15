import { writable } from 'svelte/store';

export const pokemon = writable([]);

export interface Pokemon {
	count: number;
	next: string;
	previous: null;
	results: Array<{
		name: string;
		url: string;
	}>;
}
const fetchPokemon = async () => {
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
};

fetchPokemon();

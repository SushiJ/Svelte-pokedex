import type { Pokemon } from "../types";
import { writable } from "svelte/store";

export const pokemon = writable<Array<any>>([]);
const pokemonDetails = {};
let loaded = false;

export const fetchPokemon = async () => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
  const res = await fetch(url);
  const data: Pokemon = await res.json();
  const fetchedPokemon = data.results.map((data, idx) => {
    console.log(fetchedPokemon);
    return {
      name: data.name,
      id: idx + 1,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        idx + 1
      }.png`,
    };
  });
  pokemon.set(fetchedPokemon);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  loaded = true;
};

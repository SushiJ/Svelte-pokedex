import type { PageLoad } from "./$types";

type Pokemon = {
  count: number;
  next: string;
  previous: null;
  results: Array<{
    name: string;
    url: string;
  }>;
};

type result = {
  name: string;
  id: number;
  image: string;
};

export const load: PageLoad = async ({ fetch }) => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;

  const res = await fetch(url);
  const data: Pokemon = await res.json();

  const fetchedPokemon: Array<result> = data.results.map((data, idx) => {
    return {
      name: data.name,
      id: idx + 1,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        idx + 1
      }.png`,
    };
  });

  return { fetchedPokemon };
};

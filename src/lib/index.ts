// place files you want to import through the `$lib` alias in this folder.
const pokemonDetails: Record<number, {}> = {};

export const getPokemonById = async (id: number) => {
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

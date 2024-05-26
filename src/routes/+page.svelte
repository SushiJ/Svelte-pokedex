<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
  let searchTerm = "";
  let bindedSearchTerm = "";

  let filteredPokes: Array<{
    name: string;
    id: number;
    image: string;
  }> = [];

  function debounceFn(cb: Function, delay: number) {
    let timer: number | null;
    return function (...args: any) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        // @ts-ignore next-line
        cb.apply(this, args);
        timer = null;
      }, delay);
    };
  }

  const debounce = debounceFn((value: string) => (searchTerm = value), 500);

  $: {
    if (searchTerm) {
      console.log(searchTerm);
      filteredPokes = data.fetchedPokemon.filter((poke) =>
        poke.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    } else {
      filteredPokes = [...data.fetchedPokemon];
    }
  }
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
  bind:value={bindedSearchTerm}
  class="w-full rounded-md text-lg p-4 border-2 my-4 py-2 focus:border-[#f44336] focus:outline-none"
  type="text"
  name=""
  placeholder="Search for Pokemon"
  on:keyup={() => debounce(bindedSearchTerm)}
/>
<div class="grid gap-4 md:grid-cols-2 grid-cols-1">
  {#each filteredPokes as pokemon}
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

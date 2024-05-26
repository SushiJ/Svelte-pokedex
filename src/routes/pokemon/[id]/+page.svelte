<script lang="ts">
  import type { Poke } from "../../../types";

  export let data: {
    data: Poke;
  };
  let { name, types, height, weight, sprites } = data.data;
</script>

<div class="flex flex-col items-center justify-center">
  <h1 class="text-4xl text-center my-8 uppercase">{name}</h1>
  <p>
    Type: <strong class="capitalize text-[#f44336]">{types[0].type.name}</strong
    >
    | Height:
    <strong class="text-[#f44336]">{height}</strong>
    | Weight: <strong class="text-[#f44336]">{weight}</strong>
  </p>
  <img class="h-32 w-auto" src={sprites["front_default"]} alt={name} />
</div>

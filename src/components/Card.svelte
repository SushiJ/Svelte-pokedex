<script lang="ts">
  type Props = {
    id: number;
    image: string;
    name: string;
  };

  export let pokeman: Props;
</script>

<a
  class="flex flex-col items-center p-6 bg-emerald-50 shadow-md rounded-md"
  href={`/pokemon/${pokeman.id}`}
>
  <img
    class="object-contain h-32 w-auto"
    src={pokeman.image}
    alt={pokeman.name}
  />
  <h2 class="">
    <span class="text-[#f44336] text-xl">
      {pokeman.id}.
    </span>

    <span class="text-2xl uppercase">
      {pokeman.name}
    </span>
  </h2>
</a>

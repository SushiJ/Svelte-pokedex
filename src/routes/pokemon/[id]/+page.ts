import { getPokemonById } from "$lib";
import type { PageLoad } from "../../$types";
import type { Poke } from "../../../types";

export const load: PageLoad = async ({ params }) => {
  const { id } = params as { id: string };
  const data = (await getPokemonById(Number(id))) as Poke;
  return {
    data,
  };
};

import { useQuery } from "react-query";

import { pokemonApi } from "../api";

const useFindPokemon = (name: string | undefined) => {
  return useQuery(["pokemon", name], () => {
    if (!name) {
      return null;
    }

    return pokemonApi.getPokemon(name);
  });
};

export default useFindPokemon;

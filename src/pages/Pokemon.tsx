import { useParams } from "react-router";

import useFindPokemon from "../hooks/find-pokemon";

const Pokemon: React.FC<{}> = () => {
  const { pokemon: pokemonName } = useParams();

  const pokemon = useFindPokemon(pokemonName);

  if (pokemon.isLoading) {
    return <div>loading</div>;
  }

  return <div>{pokemon.data?.data.name}</div>;
};

export default Pokemon;

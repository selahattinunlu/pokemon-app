import { PokemonsResponseResult } from "../@types/api";

import PokemonCard from "../components/PokemonCard";
import { useApp } from "../states/AppState";

const Home: React.FC<{}> = () => {
  const { pokemons } = useApp();

  if (pokemons.isLoading) {
    return <div>"loading"</div>;
  }

  return (
    <div>
      <h1>Home</h1>

      <div className="grid grid-cols-4 gap-8">
        {pokemons.data?.data.results.map((pokemon: PokemonsResponseResult) => (
          <PokemonCard key={pokemon.name} name={pokemon.name} />
        ))}
      </div>
    </div>
  );
};

export default Home;

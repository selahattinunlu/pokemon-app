import InView from "react-intersection-observer";
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
          <InView threshold={0.3} triggerOnce={true}>
            {({ inView, ref }) => {
              return inView ? (
                <PokemonCard name={pokemon.name} />
              ) : (
                <div
                  ref={ref}
                  className="w-full h-96 bg-gray-100 rounded-lg"
                ></div>
              );
            }}
          </InView>
        ))}
      </div>
    </div>
  );
};

export default Home;

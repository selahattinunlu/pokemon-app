export type PokemonsResponseResult = {
  name: string;
  url: string;
};

export type PokemonsResponse = {
  data: {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonsResponseResult[];
  };
};

export type PokemonResponse = {
  data: {
    name: string;
    sprites: {
      other: {
        dream_world: {
          front_default: string;
        };
      };
    };
  };
};

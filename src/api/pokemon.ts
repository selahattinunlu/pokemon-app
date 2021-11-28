import client from "./client";
import { PokemonResponse, PokemonsResponse } from "../@types/api";

const getAllPokemons = async (): Promise<PokemonsResponse> =>
  client.get("/pokemon?limit=2000");

const getPokemon = async (name: string): Promise<PokemonResponse> =>
  client.get(`/pokemon/${name}`);

const pokemonApi = {
  getPokemon,
  getAllPokemons,
};

export default pokemonApi;

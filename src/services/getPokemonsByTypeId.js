import { axiosInstance } from "../api/axiosInstance";

export async function getPokemonsByTypeId(typeId) {
  try {
    const res = await axiosInstance.get(`type/${typeId}/`);

    return res.data.pokemon.map((pokemonData) => pokemonData.pokemon);
  } catch (error) {
    console.error(error);
  }
}

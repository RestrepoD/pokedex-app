import { axiosInstance } from "../api/axiosInstance";

function getPokemonImg(sprites) {
  const firstOption = sprites.other.dream_world.front_default;
  const secondOption = sprites.other["official-artwork"].front_default;
  const thirdOption = sprites.other.home.front_default;

  if (firstOption) {
    return firstOption;
  } else if (secondOption) {
    return secondOption;
  } else return thirdOption;
}

export async function getPokemonById(id) {
  try {
    const res = await axiosInstance.get(`pokemon/${id}`);
    const pokemonData = res.data;
    const adaptedData = {
      name: pokemonData.name[0].toUpperCase() + pokemonData.name.slice(1),
      types: pokemonData.types.map((typeInfo) => typeInfo.type.name),
      species: pokemonData.species.name,
      weight: pokemonData.weight,
      baseExperience: pokemonData.base_experience,
      abilities: pokemonData.abilities.map((abInfo) => abInfo.ability.name),
      stats: pokemonData.stats.map((statInfo) => ({
        name: statInfo.stat.name,
        value: statInfo.base_stat,
      })),
      image: getPokemonImg(pokemonData.sprites),
    };

    return adaptedData;
  } catch (error) {
    console.log(error);
  }
}

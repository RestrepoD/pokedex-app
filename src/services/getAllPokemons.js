import { axiosInstance } from "../api/axiosInstance";

export async function getAllPokemons() {
  try {
    const res = await axiosInstance.get("pokemon", {
      params: { limit: 10000 },
    });

    return res.data.results;
  } catch (error) {
    console.error(error);
  }
}

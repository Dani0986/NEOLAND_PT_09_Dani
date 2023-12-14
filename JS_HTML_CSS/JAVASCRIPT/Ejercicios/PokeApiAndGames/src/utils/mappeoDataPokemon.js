import {getAll} from "../services/PokeApi.service"

export const mappeoDataPokemon = async () => {
  const rawData = await getAll();
  return rawData.results.map((item) => ({
    name: item.name,
    image: item.image,
  }));
};

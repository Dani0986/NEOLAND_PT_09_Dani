import { getAll } from "../services/rickyApi.service";

export const mapeoData = async () => {
  const rawData = await getAll();
  return rawData.results.map((item) => ({
    name: item.name,
    image: item.image,
  }));
};

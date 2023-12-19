import { getAllRick } from "../services/rickyApi.service";


export const getDataRickBucle = async () => {
  const rawData = [];
  for (let i = 1; i< 100; i++) {
    rawData.push(await getAllRick(i));
  }

  return dataMap(rawData);
};

const dataMap = (data) => {
  const filterData = data.map((rick) => ({
  name: rick.name,
  image: rick.image,
  id: rick.id,
  }));
  return filterData;
}
import { streamers } from "../Data/busquedaPage.data";
export const filterData = (textoInputBusqueda) => {
  const dataFiltrada = streamers.filter((item) =>
    item.name.toLowerCase().includes(textoInputBusqueda.toLowerCase())
  );

  return dataFiltrada;
};

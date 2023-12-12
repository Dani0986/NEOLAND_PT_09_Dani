
export const filterData = (textoInputBusqueda) => {
  const dataFiltrada = filter((item) =>
    item.name.toLowerCase().includes(textoInputBusqueda.toLowerCase())
  );

  return dataFiltrada;
};

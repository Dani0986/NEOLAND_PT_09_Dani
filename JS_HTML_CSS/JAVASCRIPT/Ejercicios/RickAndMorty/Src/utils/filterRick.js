export const filterRick = (data, textoInput) => {
    const dataFilter = data.filter((item) =>
      item.name.toLowerCase().includes(textoInput.toLowerCase())
    );
    return dataFilter;
  };
  
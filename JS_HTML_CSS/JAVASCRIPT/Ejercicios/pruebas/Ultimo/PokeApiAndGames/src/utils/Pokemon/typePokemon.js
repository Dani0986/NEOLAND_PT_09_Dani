

export const typePokemon = (totalPokemon) => {
    const nameTypeNoRepeat = [];
  
    totalPokemon.forEach((item, index) => {
      item.type.forEach((typeSingle) => {
        !nameTypeNoRepeat.includes(typeSingle.type.name) &&
          nameTypeNoRepeat.push(typeSingle.type.name);
      });
    });
  
    return nameTypeNoRepeat;
  };
  
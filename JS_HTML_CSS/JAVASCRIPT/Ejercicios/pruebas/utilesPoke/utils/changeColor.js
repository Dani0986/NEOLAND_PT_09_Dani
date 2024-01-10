let isLightMode = true; // Variable para alternar entre modo claro y oscuro

export const changeColorRGB = () => {
  const lightModeColors = [
    { R: 255, G: 255, B: 255, A: 1 },
    { R: 240, G: 240, B: 255, A: 1 },
    // agregar colores para el modo claro 
  ];

  const darkModeColors = [
    { R: 50, G: 50, B: 50, A: 1 },
    { R: 80, G: 80, B: 80, A: 1 },
    // agregar colores para el modo oscuro 
  ];

  const chooseColor = (colors) => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  let selectedColor;

  if (isLightMode) {
    selectedColor = chooseColor(lightModeColors);
  } else {
    selectedColor = chooseColor(darkModeColors);
  }


  isLightMode = !isLightMode; // click para alternar entre true y false

  return `rgba(${selectedColor.R},${selectedColor.G},${selectedColor.B},${selectedColor.A})`;
};
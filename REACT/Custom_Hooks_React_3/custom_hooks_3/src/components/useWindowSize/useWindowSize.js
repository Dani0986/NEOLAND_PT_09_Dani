
import useWindowSize from "./useWindowSize"; // Suponiendo que el archivo se llama useWindowSize.js y está en el mismo directorio

const MyComponent = () => {
  const windowSize = useWindowSize();

  return (
    <div>
      <p>Width: {windowSize.width}</p>
      <p>Height: {windowSize.height}</p>
    </div>
  );
};

export default MyComponent;
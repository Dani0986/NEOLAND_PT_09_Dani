
import './App.css'

const App = () => {
  const elementos = ["Elemento 1 " , "Elemento 2", " Elemento 3",  " Elemento 4"];

  return (
    <>
          {elementos.map((elements) => {
        return `${elements}`
      })}
  </>
  );
};



export default App

import { useState } from 'react'
import './App.css'

const App = () => {
    const [mostrarContenido, setMostrarContenido] = useState(false);

    const contenidos = () => {
      setMostrarContenido(!mostrarContenido);
    };

    return (
      <div>       
        <button onClick={contenidos}>
          {mostrarContenido ? 'True' : 'False'}
        </button>
          
        {mostrarContenido && (
          <div>
            <h2>Contenido Mostrado</h2>
          </div>
        )}
      </div>
    );
  };

export default App;
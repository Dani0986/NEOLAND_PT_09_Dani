
import './App.css'

const App = () => {
  const elementos = [
    { nombre: "Dani", trabajo: "Tecnico Operador"},
    { nombre: "David", trabajo: "soporte tecnico"},
    { nombre: "Toni", trabajo: "Operario"},
    { nombre: "Sergio", trabajo: "ayudante Operario"},
  ];

  return (
    <>
      {elementos.map((elemento, index) => (
        <div key={index}>
          <p>Nombre: {elemento.nombre}</p>
          <p>Trabajo: {elemento.trabajo}</p>
        </div>
        
      ))}
    </>
  );
};

export default App


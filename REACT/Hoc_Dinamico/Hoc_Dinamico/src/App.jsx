import React from 'react'
/* eslint-disable react/prop-types */
import Title from "./components/Title";
import WithComponentNameLog from "./hocs/WithComponentNameLog";
import "./App.css";
import { WithColorSwap } from "./hocs/WithColorSwap";

// Siempre FUERA DEL RENDER de un componente, envolvemos al componente que queremos en un HOC
const HomeWithLog = WithComponentNameLog(Title);

// 1. Componente Section que recibe un título y una descripción, reusable:
const Section = ({ title, description }) => {
  return (
    <section>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
};

const ColorSwapSection = WithColorSwap(Section);

const App = () => {
  return (
    <div className='App'>
      {/* Ahora podemos invocar al componente HomeWithLog directamente como si fuese HomePage */}
      <HomeWithLog description={"Esta es la descripcion"} />
      {/** 3. Podemos usar el componente en App como si fuese Section, pero con la animación aplicada: **/}
      <ColorSwapSection title='Coding' description=' HOC ' />
    </div>
  );
};

export default App;

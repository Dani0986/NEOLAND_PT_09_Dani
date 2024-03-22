

const App = () => {
  const hora = new Date().getHours();
  const saludos =
    hora >= 6 && hora < 12
      ? 'Buenos días'
      : hora >= 12 && hora < 20
      ? 'Buenas tardes'
      : 'Buenas noches';

  return <div>{saludos}</div>;
}

export default App;
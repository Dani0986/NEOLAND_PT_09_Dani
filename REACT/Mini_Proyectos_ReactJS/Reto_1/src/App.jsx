import  { useState, useEffect } from 'react';
import  './App.css';

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {characters.map(character => (
        <div key={character.id} >
          <img src={character.image} alt={character.name} />
          <div>
            <h2>{character.name}</h2>
            <p>ID: {character.id}</p>
            {character.status === 'Alive' && <p>Status: Alive</p>}
            <p>Origin: {character.origin.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
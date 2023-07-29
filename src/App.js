import React, { useState, useEffect } from 'react';
import { getAllStarships } from './services/sw-api';
import StarshipCard from './components/StarshipCard';
import './App.css';

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    
    getAllStarships()
      .then((starshipsData) => setStarships(starshipsData))
      .catch((error) => console.error('Error getting starships:', error));
  }, []);

  return (
    <div>
      <h1>Star Wars Starships</h1>
      {starships.map((starship) => (
        <StarshipCard key={starship.name} name={starship.name} />
      ))}
    </div>
  );
}

export default App;

import React, { useState } from 'react';

function StarshipCard({ name }) {
  const [showInfo, setShowInfo] = useState(false);

  const handleToggle = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="starship-card" onClick={handleToggle}>
      <h2>{name}</h2>
      {showInfo && (
        <div className="starship-info">
        
          <p>Additional information about {name}</p>
        </div>
      )}
    </div>
  );
}

export default StarshipCard;

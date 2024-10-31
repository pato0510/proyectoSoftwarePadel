"use client";

import { useEffect, useState } from 'react';

function MatchList() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      const response = await fetch('/api/matches');
      const data = await response.json();
      setMatches(data);
    };

    fetchMatches();
  }, []);

  return (
    <div>
      <h2>Partidos Disponibles</h2>
      {matches.map(match => (
        <div key={match.id}>
          <h3>{`Categoría ${match.category} - ${match.type}`}</h3>
          <p>{`Organizador: ${match.organizer.name}`}</p>
          <p>{`Día: ${match.day}, Hora: ${match.time}`}</p>
        </div>
      ))}
    </div>
  );
}

export default MatchList;

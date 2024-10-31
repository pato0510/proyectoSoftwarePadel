"use client";

import { useState } from 'react';

export default function CreateMatch() {
  const [day, setDay] = useState('');
  const [time, setTime] = useState('');
  const [type, setType] = useState('Mixto');
  const [category, setCategory] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/matches/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ day, time, type, category }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={day} onChange={(e) => setDay(e.target.value)}>
        <option value="Lunes">Lunes</option>
        {/* Agrega los demás días */}
      </select>
      <select value={time} onChange={(e) => setTime(e.target.value)}>
        <option value="7 AM">7 AM</option>
        {/* Agrega los demás horarios */}
      </select>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="Mixto">Mixto</option>
        <option value="Masculino">Masculino</option>
        <option value="Femenino">Femenino</option>
      </select>
      <select value={category} onChange={(e) => setCategory(Number(e.target.value))}>
        {[1, 2, 3, 4, 5, 6].map(cat => (
          <option key={cat} value={cat}>{`Categoría ${cat}`}</option>
        ))}
      </select>
      <button type="submit">Crear Partido</button>
    </form>
  );
}


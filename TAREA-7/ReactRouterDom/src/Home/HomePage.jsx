import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Bienvenido a la página de Rick and Morty</h1>
      <h3>Enlaces rápidos</h3>
      <nav>
        <Link to="/characters">Ir a personajes</Link> <br />
        <Link to="/episodes">Ir a episodios</Link>
      </nav>
    </div>
  );
}

export default HomePage;

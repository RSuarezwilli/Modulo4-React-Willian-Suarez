import React, { useState } from "react";
import RickAndMortyCharacterCard from "./Components CharacterCard/CharacterCard";

function App() {
  const [showCharacter, setShowCharacter] = useState(false);

  const handleClick = () => {
    setShowCharacter(!showCharacter); // Alterna el estado de visibilidad
  };

  return (
    <div className="iman">
      <h1 className="body">Personajes de Rick and Morty</h1>
      <button onClick={handleClick}>
        {showCharacter ? "Ocultar Personaje" : "Mostrar Personaje"}
      </button>

      {/* Mostrar el componente solo si el estado showCharacter es true */}
      {showCharacter && (
        <>
          <RickAndMortyCharacterCard id={1} />
          <RickAndMortyCharacterCard id={2} />
          <RickAndMortyCharacterCard id={3} />
          <RickAndMortyCharacterCard id={4} />
          <RickAndMortyCharacterCard id={5} />
          <RickAndMortyCharacterCard id={6} />
          <RickAndMortyCharacterCard id={10} />
        </>
      )}
    </div>
  );
}

export default App;

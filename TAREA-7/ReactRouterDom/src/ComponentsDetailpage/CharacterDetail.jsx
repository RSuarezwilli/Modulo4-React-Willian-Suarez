import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CharacterDetailPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => setCharacter(data));
  }, [id]);

  if (!character) return <p>Cargando...</p>;

  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p>Especie: {character.species}</p>
      <p>Género: {character.gender}</p>
      <p>Estado: {character.status}</p>
    </div>
  );
}

export default CharacterDetailPage;

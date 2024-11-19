import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function CharacterPage() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setTotalPages(data.info.pages);
      });
  }, [page]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className="container">
      <h1>Listado de personajes</h1>
      <div className="character-list">
        {characters.map((character) => (
          <div key={character.id} className="character-card">
            {/* <h3>{character.name}</h3>
            <img src={character.image} alt={character.name} />
            <p>{character.species}</p> */}
            <Link to={`/characters/${character.id}`}>
            <h3>{character.name}</h3>
            </Link>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
          Anterior
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            style={{ backgroundColor: page === i + 1 ? '#0056b3' : '#007bff' }}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default CharacterPage;

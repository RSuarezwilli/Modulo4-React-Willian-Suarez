import React, { useEffect, useState } from 'react';

function EpisodesPage() {
  const [episodes, setEpisodes] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode?page=${page}`)
      .then((response) => response.json())
      .then((data) => setEpisodes(data.results));
  }, [page]);

  return (
    <div>
      <h1>Listado de episodios</h1>
      <ul>
        {episodes.map((episode) => (
          <li key={episode.id}>
            <strong>{episode.name}</strong> - {episode.air_date}
          </li>
        ))}
      </ul>
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Anterior
      </button>
      <button onClick={() => setPage(page + 1)}>Siguiente</button>
    </div>
  );
}

export default EpisodesPage;

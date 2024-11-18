import { useEffect, useState } from "react";
import CharacterCard from "./ComponentCaracterCard/characterCard";
import "./App.css";

function App() {
  const [charactersList, setCharactersList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    // Fetch data cada vez que cambie la página
    fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Resultado del endpoint
        setCharactersList(data.results); // Actualizar lista de personajes
        setTotalPages(data.info.pages); // Actualizar total de páginas
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [currentPage]);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div className="app-container">
      <h1>Personajes de Rick and Morty</h1>
      <div className="cards-container">
        {charactersList.map((character) => (
          <CharacterCard
            key={character.id}
            nombre={character.name}
            img={character.image}
            estado={character.status}
            fechaCreacion={character.created}
          />
        ))}
      </div>
      <div className="pagination">
  <button
    className="pagination-button"
    onClick={goToPreviousPage}
    disabled={currentPage === 1}
  >
    Anterior
  </button>
  
 
<span className="pagination-info">
    Página {currentPage} de {totalPages}
  </span>
  
  
<button
    className="pagination-button"
    onClick={goToNextPage}
    disabled={currentPage === totalPages}
  >
    Siguiente
  </button>
</div>

</div>
    
  );
}

export default App;

import React, { useState, useEffect } from 'react';

function App() {
  const [filters, setFilters] = useState({
    name: '',
    status: '',
    type: '',
    gender: ''
  });
  const [charactersList, setCharactersList] = useState([]);

  const buildQueryParams = () => {
    const params = new URLSearchParams();
    if (filters.name) params.append('name', filters.name);
    if (filters.status) params.append('status', filters.status);
    if (filters.gender) params.append('gender', filters.gender);
    if (filters.type) params.append('type', filters.type);
    return params.toString();
  };

  const onSearch = async (e) => {
    e.preventDefault();
    const queryParams = buildQueryParams();
    const url = `https://rickandmortyapi.com/api/character/?${queryParams}`;
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCharactersList(data.results);
    } catch (error) {
      console.error('Error al obtener los personajes:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
          Rick and Morty - Filtros
        </h1>

        {/* Formulario de filtros */}
        <form onSubmit={onSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div>
            <input
              type="text"
              placeholder="Buscar por nombre"
              value={filters.name}
              onChange={(e) => setFilters({ ...filters, name: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <select
              value={filters.status}
              onChange={(e) => setFilters({ ...filters, status: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Seleccionar estado</option>
              <option value="alive">Vivo</option>
              <option value="dead">Muerto</option>
              <option value="unknown">Desconocido</option>
            </select>
          </div>

          <div>
            <select
              value={filters.gender}
              onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Seleccionar género</option>
              <option value="female">Hembra</option>
              <option value="male">Hombre</option>
              <option value="genderless">Sin género</option>
              <option value="unknown">Desconocido</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-6 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 sm:col-span-2 lg:col-span-1"
          >
            Buscar
          </button>
        </form>

        {/* Mostrar los personajes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {charactersList.map((character) => (
            <div
              key={character.id}
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={character.image}
                alt={character.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold text-center">{character.name}</h2>
              <p className="text-center text-gray-600">{character.species}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

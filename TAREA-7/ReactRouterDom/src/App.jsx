import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Home/HomePage';
import CharacterPage from './ComponentsPage/CharacterPage';
import EpisodesPage from './ComponentsEpisodios/Episodios';
import NotFoundPage from './ComponentsNotFound/NotFound';
import CharacterDetailPage from './ComponentsDetailpage/CharacterDetail';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/characters" element={<CharacterPage />} />
        <Route path="/characters/:id" element={<CharacterDetailPage/>} />
        <Route path="/episodes" element={<EpisodesPage />}/>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </Router>
  );
}

export default App;

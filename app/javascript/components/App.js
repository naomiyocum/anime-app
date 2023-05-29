import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Editor from './Editor';
import Anime from './Anime';
import AnimeForm from './AnimeForm'

const App = () => (
  <Routes>
    <Route path="animes" element={<Editor />} />
    <Route path="animes/:id" element={<Anime />} />
    <Route path="animes/new" element={<AnimeForm />}/>
    
  </Routes>
)

export default App;
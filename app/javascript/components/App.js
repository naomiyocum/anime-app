import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Editor from './Editor';
import Anime from './Anime';

const App = () => (
  <Routes>
    <Route path="animes" element={<Editor />} />
    <Route path="animes/:id" element={<Anime />} />
  </Routes>
)

export default App;
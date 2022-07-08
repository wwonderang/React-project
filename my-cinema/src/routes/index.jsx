import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import MovieList from '../components/MovieList';
import Header from '../components/Header';
import Description from '../components/Description';

const MovieRoutes = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<MovieList />} />
      <Route path='/MovieList/:eventId' element={<Description />} />
    </Routes>
  </BrowserRouter>
)

export default MovieRoutes; 
 
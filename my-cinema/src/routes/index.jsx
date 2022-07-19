import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import MovieList from '../components/MovieList';
import Header from '../components/Header';
import Description from '../components/Description';
import Modal from '../components/Modal';

const MovieRoutes = () => {
  const [ modalActive, setModalActive ] = useState(true);

  return (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<MovieList />} />
      <Route path='/MovieList/:eventId' element={<Description />} />
    </Routes>
    <Modal active = {modalActive} setActive={setModalActive} />
  </BrowserRouter>
)};


export default MovieRoutes; 
 
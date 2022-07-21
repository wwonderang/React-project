import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import MovieList from '../components/MovieList';
import Header from '../components/Header';
import Description from '../components/Description';
import BasicModal from '../components/BasicModal';

const MovieRoutes = () => {
  const [ isModalOpen, setIsModalOpen ] = useState(false);

  const handleBtnClick = () => {
    setIsModalOpen(true);
  }

  return (
  <BrowserRouter>
    <Header openModal={handleBtnClick} />
    <Routes>
      <Route path='/' element={<MovieList />} />
      <Route path='/MovieList/:eventId' element={<Description />} />
    </Routes>
    <BasicModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
  </BrowserRouter>
)};


export default MovieRoutes; 
 
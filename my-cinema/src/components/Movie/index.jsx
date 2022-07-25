import React from "react";

import { useNavigate } from 'react-router-dom';

import Button from '../Button';

import './movie.scss';

const Movie = (props) => {
  const { movie } = props;
  const { posterLink, name, ageLimit } = movie;

  const navigate = useNavigate();

  const handleBuyClick = (eventId) => () => {
    console.log('eventId', eventId);
    navigate(`/MovieList/${movie.eventId}`);
  }

  return (
    <div
      className='movie-wrapper'>
      <img className='movie-img' src={posterLink} alt="movie" />
      <div className='movie-name'>{name}</div>
      <div className='movie-age'>{ageLimit.acronym}</div>

      <button onClick={handleBuyClick(movie.eventId)}>Buy a ticket</button>

    </div>
  )
}

export default Movie;

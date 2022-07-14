import React from "react";

import { Link } from 'react-router-dom';

import Button from '../Button';

import './movie.scss';

const Movie = (props) => {
  const { movie } = props;
  const { posterLink, name, ageLimit } = movie;

  return (
    <div
      className='movie-wrapper'>
      <img className='movie-img' src={posterLink} alt="movie" />
      <div className='movie-name'>{name}</div>
      <div className='movie-age'>{ageLimit.acronym}</div>

      <Link to={`/MovieList/${movie.eventId}`}>
        <Button />
      </Link>
    </div>
  )
}

export default Movie;

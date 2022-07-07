import React from "react";

import { Link } from 'react-router-dom';

import Button from '../Button';

const Movie = (props) => {
  const { movie } = props;
  const { bannerLink, name, ageLimit } = movie;

  return (
    <div
      style={{height: 250, width: 200, marginTop: 20}} 
      className='movie-wrapper'
    >
      <img className='movie-img' style={{height:150, width:200}} src={bannerLink} alt="movie" />
      <div className='movie-name'>{name}</div>
      <div className='movie-age'>{ageLimit.acronym}</div>

      <Link to={`/MovieList/${movie.eventId}`}>
        <Button />
      </Link>
    </div>
  )
}

export default Movie;

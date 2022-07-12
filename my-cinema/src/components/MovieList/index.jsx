import React, { useEffect, useState, useCallback } from "react";

import Movie from "../Movie";
import Loader from "../Loader";

import './movieList.scss';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  const [city, setCity] = useState(5);

  const [isLoading, setLoading] = useState(false);

  const [isError, setIsError] = useState(false);

  const handleCityChange = (city) => {
    city.target.value === 'Minsk' 
    ? setCity(1)
    : setCity(5);
  };

  const fetchMovies = useCallback(async () => {
    try {
      setLoading(true);
      setIsError();

      const data = await fetch(`https://soft.silverscreen.by:8443/wssite/webapi/event/data?filter=%7B%22city%22:
${city}%7D&extended=true`);
      const movies = await data.json();
      
      setMovies(movies);
      setLoading(false);

    if(!movies) {
      alert(`We've found no movies, sorry`);
    }

    } catch(error) {
      setIsError(true);
    }
  }, []);

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="movie-list">

      {isError 
      ? <div>'Ooops, something went wrong</div>
       : isLoading
        ? <Loader />
        : (
          <>
          <select className="city-name" onChange={handleCityChange}>
            <option value="Minsk">Minsk</option>
            <option value="Grodno">Grodno</option>
          </select>
          {movies.map((m) => <Movie key={m.eventId} movie={m} />)}
          </>
        )
      }

    </div>
  )
    }

export default MovieList;

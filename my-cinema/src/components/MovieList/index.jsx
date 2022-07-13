import React, { useEffect, useState, useCallback } from "react";

import Movie from "../Movie";
import Loader from "../Loader";

import './movieList.scss';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  const [city, setCity] = useState(1);

  const [isLoading, setLoading] = useState(false);

  const [isError, setIsError] = useState(false);

  // const [email, setEmail] = useState(0);

//   const handleEmailChange = (e) => {
//     if(!!+e.target.value) {
//     setEmail(e.target.value.toLowerCase());
//   }
// }

  const handleCityChange = (e) => {
    setCity(e.target.value) 
  };
  // useEffect(() => {
  //   console.log('city', city);
  // }, [city]);

  const fetchMovies = useCallback(async () => {
    try {
      setLoading(true);
      setIsError();
      console.log('city useCallback', city);
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
  }, [city]);
  console.log('movies', movies);

  useEffect(() => {
    fetchMovies();
  }, [city]);

  return (
    <div className="movie-list">

      {isError 
      ? <div>'Ooops, something went wrong</div>
       : isLoading
        ? <Loader />
        : (
          <>
          <select className="city-name" value={city} onChange={handleCityChange}>
            <option value={1}>Minsk</option>
            <option value={5}>Grodno</option>
          </select>
          {/* <input type="text" onChange={handleEmailChange} value={email} /> */}
          {movies.map((m) => <Movie key={m.eventId} movie={m} />)}
          </>
        )
      }

    </div>
  )
    }

export default MovieList;

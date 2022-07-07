import React, { useEffect, useState, useCallback } from "react";

import Movie from "../Movie";
import Loader from "../Loader";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  const [isLoading, setLoading] = useState(false);

  const fetchMovies = useCallback(async () => {
    setLoading(true);
    const data = await fetch(`https://soft.silverscreen.by:8443/wssite/webapi/event/data?filter=%7B%22city%22:1%7D&extended=true`);
    const movies = await data.json();
    console.log(movies, 'movies');
    setMovies(movies);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
      {
        isLoading
        ? <Loader />
        : (
          <>
          {movies.map((m) => <Movie key={m.eventId} movie={m} />)}
          </>
        )
      }

    </div>
  )
    }

export default MovieList;

import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

import Loader from "../Loader";
import MovieInfo from "../MovieInfo";

const Description = ({match}) => {
  const [movieDetails, setmovieDetails] = useState([]);

  const { eventId } = useParams();

  const [isLoading, setIsLoading] = useState(false);

  console.log('eventId', eventId);

  const fetchMovieInfo = useCallback(async () => {
    setIsLoading(true);
    const data = await fetch(
      `https://soft.silverscreen.by:8443/wssite/webapi/event/data?filter=%7B%22event%22:%22${eventId}%22,%22city%22:%221%22%7D&extended=true`
      );
    const movieDetails = await data.json();
    console.log(movieDetails, 'description');
    setmovieDetails(movieDetails);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMovieInfo([])
  }, [fetchMovieInfo]);

  return (
    <div key={movieDetails.eventId} style={{height: 250, witdh: 150, backgroundColor: 'blue'}}>
      {
        isLoading
        ? <Loader />
        : (
          <>
          {movieDetails.map((d) => <MovieInfo key={d.eventId} movie={d} />)}
          </>
        )
      }
    </div>
  )
}

export default Description;
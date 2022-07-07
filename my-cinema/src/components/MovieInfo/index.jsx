import React from "react";

const MovieInfo =(props) => {
  const { movieDetails} = props;
  const {bannerLink, name, annotation} = movieDetails;

  return (
    <div>
      <img className='movie-img' style={{height:150, width:200}} src={bannerLink} alt="movie" />
      <div className='movie-name'>{name}</div>
      <div className="movie-annotation">{annotation}</div>
    </div>
  )
}

export default MovieInfo;
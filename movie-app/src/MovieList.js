import React from "react";
import MovieListEntry from "./MovieListEntry";


function MovieList(props) {
  return(
  	<div className="containerMovieList">
   
    {props.name.value.map(movie => 
      <MovieListEntry click={props.click} movname={movie.title} pic={movie.poster_path} desc={movie.overview}/>
    )}
   
    </div>
  )
};

export default MovieList;  
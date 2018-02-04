import React from "react";
import MovieListEntry from "./MovieListEntry";


function MovieList(props) {
  return(
  	<div>
    <div>
    {props.name.value.map(movie => 
      <MovieListEntry   movname={movie.title} description={movie.overview} pic={movie.poster_path}/>
    )}
    </div>
    </div>
  )
};

export default MovieList; 
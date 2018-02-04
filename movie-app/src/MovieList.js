import React from "react";
import MovieListEntry from "./MovieListEntry";


function MovieList(props) {
  return(
    <ul>
    {props.name.value.map(movie => 
      <MovieListEntry name={movie.title} description={movie.overview} pic={movie.poster_path}/>
    )}
    </ul>
  )
};

export default MovieList; 
import React from "react";
import MovieListEntry from "./MovieListEntry";


function MovieList(props) {
  return(
    <ul>
      <MovieListEntry name={props.name.value}/>
    </ul>
  )
};

export default MovieList; 
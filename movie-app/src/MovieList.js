import React from "react";
import MovieListEntry from "./MovieListEntry";


function MovieList(props) {
  
  return(
  	<div className="containerMovieList"> 
      
	    {props.movies.map(movie => 
	      <MovieListEntry movie={movie} key={movie.id} click={props.click}/>
	    )}
     
    </div>
  )
};
 
export default MovieList;     
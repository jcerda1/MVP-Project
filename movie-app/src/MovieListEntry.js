import React, { Component } from 'react';

class MovieListEntry extends Component {
  
  render() {
    return(
     <div  className="gallery" >
       <div>
         <div onClick={() => {this.props.click(this.props.movie.id)}}  className="movieName">{this.props.movie.title}</div>
         <div className="descBox">{this.props.movie.overview}</div>
       </div>
       <div>
         <img className="poster" src={`http://image.tmdb.org/t/p/w185/${this.props.movie.poster_path}`} alt="Smiley face"/> 
       </div>
    </div>
     
    )
  }
};


export default MovieListEntry;    
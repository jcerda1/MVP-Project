import React, { Component } from 'react';

class MovieListEntry extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.click)
  }
  render() {
    return(
     <div  className="gallery" >
       <div onClick={this.props.click} className="movieName">{this.props.movname}</div>
       <div className="containerBox" style={{"position" : "relative"}}>
         <div className="descBox">{this.props.desc}</div>
         <img src={`http://image.tmdb.org/t/p/w185/${this.props.pic}`} alt="Smiley face"/> 
       </div>
     </div>
    )
  }
};


export default MovieListEntry;  
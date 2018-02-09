import React, { Component } from 'react';

class MovieListEntry extends Component {
  // constructor(props) {
  //   super(props);
  //   //console.log(this.props)
  // } 
  render() {
    return(
     <div  className="gallery" >
       <div>
         <div onClick={this.props.click}  className="movieName">{this.props.movname}</div>
         <div className="descBox">{this.props.desc}</div>
       </div>
       <div>
         <img className="poster" src={`http://image.tmdb.org/t/p/w185/${this.props.pic}`} alt="Smiley face"/> 
       </div>
    </div>
     
    )
  }
};


export default MovieListEntry;    
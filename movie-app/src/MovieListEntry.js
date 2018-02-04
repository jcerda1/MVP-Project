import React, { Component } from 'react';

class MovieListEntry extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
  }
  render() {
    return(
     <div>
       <div style={{"padding": "10px", "border" : "4px solid black", "textAlign" : "center"}}>{this.props.name}</div>
       <div>
         <img style={{"padding": "10px"}}src={`http://image.tmdb.org/t/p/w185/${this.props.pic}`} alt="Smiley face"/>
       </div>
       <div>
         <div style={{"padding": "10px", "border" : "4px solid black"}}>{this.props.description}</div>
       </div>
      </div>
    )
  }
};


export default MovieListEntry; 
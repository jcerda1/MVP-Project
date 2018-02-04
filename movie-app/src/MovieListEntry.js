import React, { Component } from 'react';

class MovieListEntry extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.key)
  }
  render() {
    return(
     <div className="gallery" >
       <div style={{"padding": "10px", "border" : "4px solid black", "textAlign" : "center", "backgroundColor" : "#EDAE49"}}>{this.props.movname}</div>
       <div>
         <img style={{ "padding": "10px", "border" : "2px"}} src={`http://image.tmdb.org/t/p/w185/${this.props.pic}`} alt="Smiley face"/>
       </div>
       <div>
         <div style={{"padding": "10px", "border" : "4px solid black","backgroundColor" : "#00A896"}}>{this.props.description}</div>
       </div>
      </div>
    )
  }
};


export default MovieListEntry; 
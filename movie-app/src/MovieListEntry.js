import React, { Component } from 'react';

class MovieListEntry extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.click)
  }
  render() {
    return(
     <div  className="gallery" >
       <div style={{"padding": "10px", "border" : "4px solid black", "backgroundColor" : "#EDAE49"}} >{this.props.movname}</div>
       <div>
         <img  onClick={this.props.click} src={`http://image.tmdb.org/t/p/w185/${this.props.pic}`} alt="Smiley face"/>
       </div>
     </div>
    )
  }
};


export default MovieListEntry;  
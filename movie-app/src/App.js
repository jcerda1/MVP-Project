import React, { Component } from 'react';
import './App.css';
import MovieList from "./MovieList";
import SearchBar from "./SearchBar"



class App extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      value : props.data.results
    }
  }


  render() {
    return ( 
      <div>
        <h1 style={{"margin": "auto", "width": "50%", "border": "10px solid #003D5B", "padding" : "20px", "textAlign" : "center", "backgroundColor" : "#98FB98"}}>Movie App</h1>
        <SearchBar/>
        <MovieList  name={this.state}/>
      </div>
    );
  }
}

export default App;

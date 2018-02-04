import React, { Component } from 'react';
import './App.css';
import MovieList from "./MovieList";



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
        <h1 style={{"margin": "auto", "width": "50%", "border": "10px solid black", "padding" : "10px", "textAlign" : "center"}}>Movie App</h1>
        <MovieList className= "App" name={this.state}/>
      </div>
    );
  }
}

export default App;

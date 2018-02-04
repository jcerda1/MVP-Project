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
        <h1 style={{"margin": "auto", "width": "50%", "border": "20px solid #003D5B", "padding" : "20px", "textAlign" : "center", "backgroundColor" : "#D1495B"}}>Movie App</h1>
        <MovieList  name={this.state}/>
      </div>
    );
  }
}

export default App;

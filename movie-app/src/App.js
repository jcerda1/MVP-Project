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
        <MovieList name={this.state}/>
      </div>
    );
  }
}

export default App;

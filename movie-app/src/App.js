import React, { Component } from 'react';
import './App.css';
import MovieList from "./MovieList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value : null
    }
  }
  render() {
    return (
      <div>
        <MovieList/>
      </div>
    );
  }
}

export default App;

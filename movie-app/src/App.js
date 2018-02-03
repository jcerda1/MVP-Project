import React, { Component } from 'react';
import './App.css';
import MovieList from "./MovieList";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value : this.props
    }
    console.log('this is inside app', this.props)
  }


  render() {
    return (
      <div>
        <MovieList name={this.props.name}/>
      </div>
    );
  }
}

export default App;

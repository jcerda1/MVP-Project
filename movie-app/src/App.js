import React, { Component } from 'react';
import './App.css';
import MovieList from "./MovieList";
import SearchBar from "./SearchBar"



class App extends Component { 
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      value : props.data.results
    }
  }

 handleClick(e) {
   console.log(e)
 }


  render() {
    return ( 
      <div>
        <h1 className="movieApp">Movie App</h1>
        <SearchBar/>
        <MovieList  click={this.handleClick} name={this.state}/>
      </div>
    );
  }
}

export default App;

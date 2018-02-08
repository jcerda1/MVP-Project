import React, { Component } from 'react';
import './App.css';
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";
import TrailerPlayer from "./TrailerPlayer";


class App extends Component { 
  constructor(props) {
    super(props); 
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      value : props.data.results,
      desc : props.data.results[0],
      currentMovie: ''
    }
    console.log(this.state)
  } 

componentWillMount() { 
   fetch('http://localhost:3001/search',
     {
       method: 'GET'
     }
   )
    .then((res)=>{
      return res.json()
    })
    .then((res) => {
      this.setState({value: res.results})
    })

}
 
 handleClick(e) {
  //this.setState({currentMovie: e.target.textContent})
  console.log(e.target.textContent)
  this.setState({currentMovie: e.target.textContent.toString()});
  
 }



  render() {
    return ( 
      <div>
        <h1 className="movieApp">Movie App</h1>
        <nav className="navbar">
          <div>
           <SearchBar/>
          </div>
        </nav>
        <div>
          <div >
            <TrailerPlayer data={this.state.desc}/>
          </div>
          <div>
           <MovieList  click={this.handleClick} name={this.state}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

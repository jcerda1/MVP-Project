import React, { Component } from 'react';
import './App.css';
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";
import TrailerPlayer from "./TrailerPlayer";


class App extends Component { 
  constructor(props) {
    super(props); 
    this.state = {
      value : [],
      //desc : props.data.results[0],
      currentMovie: "zNCz4mQzfEI"

    } 
    this.handleClick = this.handleClick.bind(this)
    this.initialState = this.intialState.bind(this)
    this.postMovie = this.postMovie.bind(this)

  } 

componentWillMount() { 
  this.initialState()
  
}
componentDidUpdate() {
  this.postMovie()
}
 intialState() {
   var that = this;
   fetch('http://localhost:3001/search',
     {
       method: 'GET'
     }
   )
    .then((res)=>{
      return res.json()
    })
    .then((res) => {
       //console.log(res.results)
      that.setState({ value: res.results})
      
    })
 }
 
  postMovie(arr) {
    
     fetch('http://localhost:3001/movie',
    {
      method: 'POST',
      body: JSON.stringify({movie: this.state.value}),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
  .then((res) => {
    return res.json();
  })
  }

 handleClick(e) {
    console.log(e.target)

     fetch('http://localhost:3001/movies',
    {
      method: 'POST',
      body: JSON.stringify({target: e.target.textContent}),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    this.setState({currentMovie: res})
  })
   //  fetch('http://localhost:3001/trailer',
   //   {
   //     method: 'GET'
   //   }
   // )
   //  .then((res)=>{
   //    return res.json()
   //  })
   //  .then((res) => {
   //    this.setState({ currentMovie: res.results[0].key})
      
   //  })

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
            <TrailerPlayer movie={this.state.currentMovie} data={this.state.desc}/>
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

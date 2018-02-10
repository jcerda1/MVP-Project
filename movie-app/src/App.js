import React, { Component } from 'react';
import './App.css';
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";
import TrailerPlayer from "./TrailerPlayer";


class App extends Component { 
  constructor(props) {
    super(props); 
    this.state = {
      movieList : props.data.results,
      desc : props.data.results[0],
      currentMovie: "zNCz4mQzfEI",
      clickedMovie: ""
      
    } 
    this.initialState = this.intialState.bind(this);
    this.getPopular = this.getPopular.bind(this)
  } 

componentWillMount() { 
  this.initialState()
  
}

 intialState() {
   var that = this;
   fetch('http://localhost:3001/api/initial',
     {
       method: 'GET'
     }
   )
    .then((res)=>{
      return res.json()
    })
    .then((res) => {
       
      that.setState({ movieList: res.results})
      
    })
 }
 
  getVid(id) {
    fetch('http://localhost:3001/api/trailer',
      {
        method: 'POST',
        body: JSON.stringify({clickedMovie: id}),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    .then((res) => {

      return res.json();
    })
    .then((res) => {
      console.log(res.results[0].key)
      this.setState({currentMovie: res.results[0].key})
    })
  }

  getId = (id) => {
    
    this.setState({clickedMovie: id})
    this.getVid(id)
  }

 getPopular(e) {
   e.preventDefault()
   fetch('http://localhost:3001/api/getPopular',
     {
       method: "GET"
     })
     .then(res => {
       return res.json()
     })
     .then(res => {
      console.log(res)
       this.setState({movieList: res.results})
     })
 }



  render() {
    return ( 
      <div>
        <h1 className="movieApp">Movie App</h1>
        <nav className="navbar">
          <div>
           <SearchBar getPop={this.getPopular}/>
          </div>
        </nav>
        <div>
          <div >
            <TrailerPlayer movie={this.state.currentMovie} data={this.state.desc}/>
          </div>
          <div>
           <MovieList  click={this.getId} movies={this.state.movieList}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

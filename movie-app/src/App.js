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
      currentMovie: "Vu4UPet8Nyc",
      clickedMovie: ""
      
    } 
    //this.handleClick = this.handleClick.bind(this)
    this.initialState = this.intialState.bind(this);
    
    //this.getId = this.getId.bind(this);
    
  } 

componentWillMount() { 
  this.initialState()
  
}
componentDidUpdate() {
  

 
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

 handleClick(e) {
  
  //console.log(this.props.movie.id)
  //this.setState({clickedMovie: this.props.movie.id})

  //    fetch('http://localhost:3001/movies',
  //   {
  //     method: 'POST',
  //     body: JSON.stringify({target: e.target.textContent}),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   }
  // )
  // .then((res) => {
  //   return res.json();
  // })
  // .then((res) => {
  //   this.setState({currentMovie: res})
  //})
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
           <MovieList  click={this.getId} movies={this.state.movieList}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

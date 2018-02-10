import React, { Component } from 'react';



class SearchBar extends Component { 
  // constructor(props) {
  //   super(props);
  //   this.state = undefined
  //   console.log(this)
  // } 


  render() {
    return ( 
      <form >
        <div>
         <button>Most Popular</button> <button>By Title</button> <button>By Year</button> 
        </div>
        <input className="SearchBar" type="text" placeholder="Search.."/><button className="button">Search</button>
      </form>
    );
  }
}

export default SearchBar;
  
import React, { Component } from 'react';



class SearchBar extends Component { 
  constructor(props) {
    super(props);
    this.state = undefined
  }


  render() {
    return ( 
      <div >
        <input className="SearchBar" type="text" placeholder="Search.."/><button className="button">Search</button>
      </div>
    );
  }
}

export default SearchBar;

import React, { Component } from 'react';



class SearchBar extends Component { 
  constructor(props) {
    super(props);
    this.state = undefined
  }


  render() {
    return ( 
      <div >
        <input style={{"border":"1px solid #ccc", "padding": "2px", "margin-top": "8px", "font-size": "17px", "margin-right": "16px","border-radius" : "10px"}}type="text" placeholder="Search.."/><button style={{"font-size" : "17px", "border-radius" : "10px", "background-color" : "#D3D3D3"}}>Search</button>
      </div>
    );
  }
}

export default SearchBar;

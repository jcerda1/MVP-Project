import React, { Component } from 'react';

class MovieListEntry extends Component {
  constructor(props) {
    super(props);
    console.log('inside of movielistentry', this.props.name)
  }
  render() {
    return(
      <li>
      {this.props.name[0].title}
      </li>
    )
  }
};


export default MovieListEntry; 
import React, { Component } from 'react';


class TrailerPlayer extends Component { 
  // constructor (props) {
  // 	super(props)
  	
  // }
 
  render() {
    return ( 
      <div >
        <div className="TrailerPlayer">
          <iframe title= "hello" margin-right ="30px" align = "right" width="850" height="400" src="https://www.youtube.com/embed/r8NB2aaiM14" frame-border="10px" allow="autoplay; encrypted-media"  allowFullScreen></iframe>
        </div>

      </div>
    );
  }
}




       



export default TrailerPlayer;
 
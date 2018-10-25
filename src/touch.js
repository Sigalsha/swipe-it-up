import React, { Component } from 'react';
 
class Touch extends Component {
 
  swiping = () => {
    alert("You're Swiping...")
  }
 
  render() {
    return (
      <div>
          You can swipe here!
      </div>
    )
  }
}

export default Touch;

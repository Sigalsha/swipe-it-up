import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state ={
      clientStart: {x: "", y: ""} ,
      clientEnd: {x: "", y: ""},
      distance: null
    }
  }

  go = (e) => {
    let xStart = e.clientX
    let yStart = e.clientY
    console.log(xStart , yStart)
    this.setState({clientStart: {x: xStart,y: yStart}})
  }


  stop = (e) => {
    let xEnd = e.clientX
    let yEnd = e.clientY
    console.log(xEnd , yEnd)
    this.setState({clientStart: {x: xEnd,y: yEnd}})
  }

  length = () => {
    let clientStart = this.state.clientStart
    let clientEnd = this.state.clientEnd
    let xGap = clientStart.x - clientEnd.x
    let yGap = clientStart.y - clientEnd.y
    let x_square = Math.pow(xGap, 2)
    let y_square = Math.pow(yGap, 2)
    let distance = Math.sqrt(x_square + y_square)
    console.log(distance)
    this.setState({distance: distance})
  }

  render() {
    return (
      <div>
      <div onDragStart={this.go} onDragEnd={this.stop} style={{ height: 50, width: 50, backgroundColor: 'gold' }}>Hello</div>
      <button onClick={this.length}>click</button>
      {this.state.distance}
      </div>
    )
  }
}


// x_traget_square = pow(x_target - x_end, 2)
// y_traget_square = pow(y_target - y_end, 2)
// distance = sqrt(x_target_square + y_target_square)

// x_target, y_target is the position of your target.
// x_end, y_end is the end position of the swipe.
// I assume the ball position and the start position of the swipe are the same

//(22, 43)
//(23, 0)


export default App;

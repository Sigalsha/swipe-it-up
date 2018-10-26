import React, { Component } from 'react';
import './App.css';
import Touch from './touch'

class App extends Component {
  constructor() {
    super()
    this.state = {
      clientStart: { x: "", y: "" },
      clientEnd: { x: "", y: "" },
      distance: null
    }
  }

  // go = (e) => {
  //   let xStart = e.clientX
  //   let yStart = e.clientY
  //   console.log(xStart, yStart)
  //   this.setState({ clientStart: { x: xStart, y: yStart } })
  // }


  stop = (e) => {
    let xEnd = e.clientX
    let yEnd = e.clientY
    console.log(xEnd, yEnd)
    this.setState({ clientStart: { x: xEnd, y: yEnd } })
  }

  // length = () => {
  //   let clientStart = this.state.clientStart
  //   let clientEnd = this.state.clientEnd
  //   let xGap = clientStart.x - clientEnd.x
  //   let yGap = clientStart.y - clientEnd.y
  //   let x_square = Math.pow(xGap, 2)
  //   let y_square = Math.pow(yGap, 2)
  //   let distance = Math.sqrt(x_square + y_square)
  //   console.log(distance)
  //   this.setState({ distance: distance })
  // }

  render() {
    return (
      <div onMouseDown={this.stop}>
        {/* <div onClick={this.go} onDragEnd={this.stop} style={{ height: 50, width: 50, backgroundColor: 'gold' }}>Hello</div>
        <button onClick={this.length}>click</button> */}
        {this.state.distance}
        <Touch />
        <div style={{position: 'absolute', top: 20, left: 373, backgroundColor: 'green', height: 20, width: 20, color: 'white'}}>1</div>
        <div style={{position: 'absolute', top: 24, left: 296, backgroundColor: 'green', height: 20, width: 20, color: 'white'}}>2</div>
        <div style={{position: 'absolute', top: 61, left: 344, backgroundColor: 'green', height: 20, width: 20, color: 'white'}}>3</div>

      </div>
    )
  }
}



// x_traget_square = Math.pow(x_target - x_end, 2)
// y_traget_square = Math.pow(y_target - y_end, 2)
// distance = Math.sqrt(x_target_square + y_target_square)

// x_target, y_target is the position of your target.
// x_end, y_end is the end position of the swipe.
// I assume the ball position and the start position of the swipe are the same



export default App;

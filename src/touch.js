import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './touch.css'


class Touch extends Component {


  constructor() {
    super()
    this.state = {
      divPos: { x: "", y: "" },
      clientEnd: { x: "", y: "" },
      distance: null
    }
  }

  componentDidMount() {
    let rect = ReactDOM.findDOMNode(this)
      .getBoundingClientRect()
    console.log(rect.x, rect.y)
    this.setState({ divPos: { x: rect.x, y: rect.y } })
  }

  stop = (e) => {
    let xEnd = e.clientX
    let yEnd = e.clientY
    console.log(xEnd, yEnd)
    let xCenter = this.state.divPos.x + 25;
    let yCenter = this.state.divPos.y + 25;
    let xSum = (xCenter - xEnd) * (xCenter - xEnd);
    let ySum = (yCenter - yEnd) * (yCenter - yEnd)
    let distance = Math.sqrt(xSum + ySum)
    this.setState({ 
    clientEnd: { x: xEnd, y: yEnd },
    distance: distance  }, ()=> console.log(distance))
    
  }




  render() {
    return (
      <div className="targetRangeDiv" onMouseDown={this.stop}>
        {/* <div className="targetRangeDiv" onMouseLeave={this.stop}> */}
        {/* <div className="targetDiv" ></div> */}


        {/* <button onClick={this.divPosition}>click</button> */}

        {/* {this.state.divPos}
        {this.state.clientEnd} */}
      </div>
    )
  }
}



export default Touch;

// import { observer, inject } from 'mobx-react';
import React, { Component } from 'react';
// import Plane from '../../images/paper_plane_red.svg'
import ReactDOM from 'react-dom';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';



@inject("store")
@observer
class TargetTransperent extends Component {

  constructor() {
    super()
  }

  @observable divPos = { x: "", y: "" };


  @action componentDidMount() {
    let rect = ReactDOM.findDOMNode(this)
      .getBoundingClientRect()
    console.log(rect.x, rect.y)
    // this.setState({ divPos: {x: rect.x, y: rect.y}})
    this.divPos.x = rect.x + 25
    this.divPos.y =rect.y + 25
    console.log(this.divPos.x, this.divPos.y)

  }

//   @action stop = (e) => {
//     let xEnd = e.clientX
//     let yEnd = e.clientY
//     console.log(xEnd, yEnd)
//     let xCenter = this.divPos.x + 25;
//     let yCenter = this.divPos.y + 25;
//     let xSum = (xCenter - xEnd) * (xCenter - xEnd);
//     let ySum = (yCenter - yEnd) * (yCenter - yEnd)
//     let distance = Math.sqrt(xSum + ySum)
//     this.clientEnd.x = xEnd;
//     this.clientEnd.y = yEnd;
//     this.distance = distance
//     console.log(distance)


//   }

  render() {
    return (
      <div className="targetTransperent">
      </div>
    );
  }
}
export default TargetTransperent;
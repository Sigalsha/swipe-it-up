import { observer, inject } from 'mobx-react';
import React, { Component } from 'react';
// import Plane from '../../images/paper_plane_red.svg'
import ReactDOM from 'react-dom';
import { action, observable } from 'mobx';
import TargetTransperent from './TargetTransperent'

@inject("store")
@observer
class Dart extends Component {

  constructor() {
    super()
    // this.state = {
    //   divPos: { x: "", y: "" },
    //   clientEnd: { x: "", y: "" },
    //   distance: null
    // }
  }

  @observable divPos = { x: "", y: "" };
  @observable clientEnd = { x: "", y: "" };
  @observable distance = null;

  componentDidMount() {
    let rect = ReactDOM.findDOMNode(this)
      .getBoundingClientRect()
    console.log(rect.x, rect.y)
    // this.setState({ divPos: {x: rect.x, y: rect.y}})
    this.divPos.x = rect.x
    this.divPos.y =rect.y
    console.log(this.divPos.x, this.divPos.y)
  }

  @action stop = (e) => {
    let xEnd = e.clientX
    let yEnd = e.clientY
    console.log(xEnd, yEnd)
    let xCenter = this.divPos.x + 25;
    let yCenter = this.divPos.y + 25;
    let xSum = (xCenter - xEnd) * (xCenter - xEnd);
    let ySum = (yCenter - yEnd) * (yCenter - yEnd)
    let distance = Math.sqrt(xSum + ySum)
    this.clientEnd.x = xEnd;
    this.clientEnd.y = yEnd;
    this.distance = distance
    console.log(distance)
    // this.setState({
    //   clientEnd: { x: xEnd, y: yEnd },
    //   distance: distance
    // }, () => console.log(distance))

  }

  render() {
    return (
      <div className="dart" onMouseDown={this.stop}>
        <div className="startDiv"></div>
        <TargetTransperent />
      </div>
    );
  }
}
export default Dart;
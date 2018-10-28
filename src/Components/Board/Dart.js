import { observer, inject } from 'mobx-react';
import React, { Component } from 'react';
// import Plane from '../../images/paper_plane_red.svg'
import ReactDOM from 'react-dom';
import { action, observable } from 'mobx';
import TargetTransperent from './TargetTransperent'

@inject(allStores => ({
  addPlayerIconPos: allStores.store.addPlayerIconPos,
  checkStartPoint: allStores.store.checkStartPoint,
  addShot: allStores.store.addShot

}))
@observer
class Dart extends Component {

  constructor() {
    super()
  }

  @observable iconPos = { x: "", y: "" };
  @observable clientStart = { x: "", y: "" }
  @observable clientEnd = { x: "", y: "" };
  @observable distance = null;

  @action async componentDidMount() {
    let rect = ReactDOM.findDOMNode(this)
      .getBoundingClientRect()
    console.log(rect.x, rect.y)
    this.iconPos.x = await rect.x + 25 //finding the div's center
    this.iconPos.y = await rect.y + 25 //finding the div's center
    console.log(this.iconPos.x, this.iconPos.y)
    this.props.addPlayerIconPos(this.iconPos.x, this.iconPos.y) //send to store
  }

  @action start = async (e) => {
    let xStart = e.clientX; //where the player's first touch on screen
    let yStart = e.clientY;
    console.log(xStart, yStart);
    this.clientStart.x = await xStart;
    this.clientStart.y = await yStart;
    console.log(this.clientStart.x, this.clientStart.y)
    this.props.checkStartPoint(this.clientStart.x, this.clientStart.y) //send to store
  }

  @action stop = async (e) => {
    let xEnd = e.clientX
    let yEnd = e.clientY
    console.log(xEnd, yEnd)
    this.clientEnd.x = await xEnd;
    this.clientEnd.y = await yEnd;
    this.props.addShot(this.clientEnd.x, this.clientEnd.y)
    //sending shot's (x,y) to the store 

  }

  render() {
    return (
      <div className="dart" onTouchStart={this.start} onTouchEnd={this.stop} onMouseEnter={this.start} onMouseDown={this.stop} >
        <div className="startDiv"></div>
        <TargetTransperent />
      </div>
    );
  }
}
export default Dart;
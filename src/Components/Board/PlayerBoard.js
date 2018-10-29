import {observer, inject} from 'mobx-react';
import {observable, autorun} from 'mobx';
import React, { Component } from 'react';
import Message  from '../Messages/Message';
import Plane from '../Board/Plane';
import Target from '../Board/Target';
import TargetTransperent from '../Board/TargetTransperent';
import Podium from '../Messages/Podium';
import Shot from '../Board/Shot';

function sleep(ms) { 
  return new Promise(resolve => setTimeout(resolve, ms));//resolve reject 
}//return promise not should be async


@inject("store")
@observer
class PlayerBoard extends Component {
  
  @observable showMe = true;
  @observable showReady = false;
  @observable showGo = false;
  @observable showPlane = false;
  @observable showTarget = false;
  @observable showGameEnd = false;
  @observable showGetShot = false;
  @observable showReadyNext = false;
  @observable showGameOver = false;
  @observable showPrePodium = false;
  @observable showPodium = false;
  @observable showShot = false;
  
  componentDidMount = () => {
    this.props.store.socket.on('update state', () => { //from server
      this.gameManage();
    });
  }

  gameManage = async () => {
    this.showMe = false;
    if(this.props.store.gameState==='pending') {
      return;
    }
    this.showReady = true;
    await sleep(1000);
    this.showReady = false;
    this.showGo = true;
    await sleep(3000);
    this.showGo = false;
    this.showPlane = true;
    await sleep(3000);
    this.showPlane = false;
    this.showGameEnd = true;
    await sleep(3000);
    this.showGameEnd = false;
    this.showGetShot = true;
    await sleep(3000);
    this.showGetShot = false;
    this.showTarget = true;
    this.showShot = true;
    await sleep(3000);
    this.showTarget = false;
    this.showShot = false;
    this.showReadyNext = true;
    await sleep(3000);
    this.showReadyNext = false;
    this.showGameOver = true;
    await sleep(3000);
    this.showGameOver = false;
    this.showPrePodium  = true;
    await sleep(3000);
    this.showPrePodium  = false;
    this.showPodium  = true;
    await sleep(3000);
    this.showPodium  = false;
  }
  
  render() {
    return (
      <div className="mng-board">
      {/* <div className="game-status">Game status:<br/>{this.props.store.gameState}</div> */}
      {this.showReady&&<Message content='Ready?!? 1,2,3' class='ready-message'/>}
      {this.showGo&&<Message content='Go' class='go-message'/>}
      {this.showPlane&&<Plane/>}
      {this.showPlane&&<TargetTransperent/>}
      {this.showTarget&&<Target/>}
      {this.showShot&&<Shot/>}
      {this.showGameEnd&&<Message content='Time Is Up!' class='game-end-message'/>}
      {this.showGetShot&&<Message content='Wanna See Your Shot?' class='ready-message'/>}
      {this.showReadyNext&&<Message content='Get Ready For The Next One!!!' class='ready-next-message'/>}
      {this.showGameOver&&<Message content='Game Over!!!' class='game-end-message'/>}
      {this.showPrePodium&&<Message content="Let's See Who Won!" class='ready-next-message'/>}
      {this.showPodium&&<Podium/>}  
      </div>
      );
    }
  }
  export default PlayerBoard;
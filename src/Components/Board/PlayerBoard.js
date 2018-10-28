import {observer, inject} from 'mobx-react';
import {observable, autorun} from 'mobx';
import React, { Component } from 'react';
import Message  from '../Messages/Message';
import Plane from '../Board/Plane';
import Target from '../Board/Target';
import TargetTransperent from '../Board/TargetTransperent';
import Podium from '../Messages/Podium';
import Shot from '../Board/Shot';

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
  
  // disposer = autorun(() => console.log(this.props.store.getGameState));
  componentDidMount = () => {
    this.props.store.socket.on('update state', () => { //from server
      this.gameManage();
    });
    
  }
  
  componentWillUpdate = () => {  
    this.props.store.socket.on('update state', () => { //from server
      this.gameManage();
    });
  }
  
  gameManage = () => {
    if(this.props.store.gameState==='pending') {
      for (let i=1; i<=18; i++){
        let time = 't'+i 
        clearTimeout({time});
      }
      // clearTimeout(t1);
      // clearTimeout(t2);
      // clearTimeout(t3);
      // clearTimeout(t4);
      // clearTimeout(t5);
      // clearTimeout(t6);
      // clearTimeout(t7);
      // clearTimeout(t8);
      // clearTimeout(t9);
      // clearTimeout(t10);
      // clearTimeout(t11);
      // clearTimeout(t12);
      // clearTimeout(t13);
      // clearTimeout(t14);
      // clearTimeout(t15);
      // clearTimeout(t16);
      // clearTimeout(t17);
      // clearTimeout(t18);
      return;
    }
    let t1 = setTimeout(this.toggleReady, 0);//ready
    let t2 = setTimeout(this.toggleReady, 1000);
    let t3 = setTimeout(this.toggleGo, 1000);//go
    let t4 = setTimeout(this.toggleGo, 2700);
    let t5 = setTimeout(this.togglePlane, 2700);//target
    let t6 = setTimeout(this.togglePlane, 6700);
    let t7 = setTimeout(this.toggleGameEnd, 6700);//time is up
    let t8 = setTimeout(this.toggleGameEnd, 7700);
    let t9 = setTimeout(this.toggleGetShot, 7700);//wanna see your shot
    let t10 = setTimeout(this.toggleGetShot, 9500);
    let t11 = setTimeout(this.toggleTarget, 9500);// target and shot
    let t12 = setTimeout(this.toggleTarget, 14000);
    let t13 = setTimeout(this.toggleGetNext, 14000);// get ready for the next step
    let t14 = setTimeout(this.toggleGetNext, 16500);
    let t15 = setTimeout(this.toggleGameOver, 16500);
    let t16 = setTimeout(this.toggleGameOver, 18500);    
    let t17 = setTimeout(this.togglePrePodium, 18500);    
    let t18 = setTimeout(this.togglePrePodium, 20500);      
  }
  
  toggleReady = () => {
    this.showReady = !this.showReady;
  }
  toggleGo = () => {
    this.showGo = !this.showGo;
  }  
  togglePlane = () => {
    this.showPlane = !this.showPlane;
  }  
  toggleGameEnd = () => {
    this.showGameEnd = !this.showGameEnd;
  }  
  toggleGetShot = () => {
    this.showGetShot = !this.showGetShot;
  }  
  toggleGetNext = () => {
    this.showReadyNext = !this.showReadyNext;
  }  
  toggleGameOver = () => {
    this.showGameOver = !this.showGameOver;
  }  
  toggleTarget = () => {
    this.showTarget = !this.showTarget;
  }  
  togglePrePodium = () => {
    this.showPrePodium = !this.showPrePodium;
  }  
  
  render() {
    return (
      <div className="mng-board">
      <div className="game-status">Game status:<br/>{this.props.store.gameState}</div>
      {this.showReady&&<Message content='Ready?!? 1,2,3' class='ready-message'/>}
      {this.showGo&&<Message content='Go' class='go-message'/>}
      {this.showPlane&&<Plane/>}
      {this.showPlane&&<TargetTransperent/>}
      {this.showTarget&&<Target/>}
      {this.showGameEnd&&<Message content='Time Is Up!' class='game-end-message'/>}
      {this.showGetShot&&<Message content='Wanna See Your Shot?' class='ready-message'/>}
      {/* {this.showGetShot&&<Message content='Wanna See Your Shot?' class='ready-message'/>} */}
      {this.showReadyNext&&<Message content='Get Ready For The Next One!!!' class='ready-next-message'/>}
      {this.showGameOver&&<Message content='Game Over!!!' class='game-end-message'/>}
      {/* {this.showPrePodium&&<Message content="Let's See Who Won!" class='ready-next-message'/>} */}
      {/* <Podium/> */}
      <Shot/>
      </div>
      );
    }
  }
  export default PlayerBoard;
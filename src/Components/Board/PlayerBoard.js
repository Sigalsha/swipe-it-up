import {observer, inject} from 'mobx-react';
import {observable} from 'mobx';
import React, { Component } from 'react';
import Message  from '../Messages/Message';
import Dart  from '../Board/Dart';

@inject("store")
@observer
class PlayerBoard extends Component {
  
  @observable showMe = true;
  @observable showReady = false;
  @observable showGo = false;
  @observable showDart = false;
  @observable showGameEnd = false;
  @observable showGetShot = false;
  @observable showReadyNext = false;
  @observable showGameOver = false;


  componentDidMount = () => {
    alert(this.props.store.gameStatus==='pending');
    // while(true){
    //   if(!this.props.store.gameStatus==='pending'){
    //    break; 
    //   }  
    //   // do nothing
    // }
    this.gameManage();
  }

  gameManage = () => {
    setTimeout(this.toggleReady, 0);//ready
    setTimeout(this.toggleReady, 1000);
    setTimeout(this.toggleGo, 1000);//go
    setTimeout(this.toggleGo, 2700);
    setTimeout(this.toggleDart, 2700);//target
    setTimeout(this.toggleDart, 5700);
    setTimeout(this.toggleGameEnd, 5700);//time is up
    setTimeout(this.toggleGameEnd, 7700);
    setTimeout(this.toggleGetShot, 7700);//wanna see your shot
    setTimeout(this.toggleGetShot, 9500);
    setTimeout(this.toggleDart, 9500);// target and shot
    setTimeout(this.toggleDart, 14000);
    setTimeout(this.toggleGetNext, 14000);// get ready for the next step
    setTimeout(this.toggleGetNext, 16500);
    setTimeout(this.toggleGameOver, 16500);
    setTimeout(this.toggleGameOver, 18500);
  }

  toggleReady = () => {
    this.showReady = !this.showReady;
  }
  toggleGo = () => {
    this.showGo = !this.showGo;
  }  
  toggleDart = () => {
    this.showDart = !this.showDart;
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

  render() {
    return (
      (<div className="mng-board">
        {this.showReady&&<Message content='Ready?!? 1,2,3' class='ready-message'/>}
        {this.showGo&&<Message content='Go' class='go-message'/>}
        {this.showDart&&<Dart/>}
        {this.showGameEnd&&<Message content='Time Is Up!' class='game-end-message'/>}
        {this.showGetShot&&<Message content='Wanna See Your Shot?' class='ready-message'/>}
        {this.showReadyNext&&<Message content='Get ready for the next one!!!' class='ready-next-message'/>}
        {this.showGameOver&&<Message content='Game Over!!!' class='game-end-message'/>}
      </div>)
      );
    }
  }
  export default PlayerBoard;
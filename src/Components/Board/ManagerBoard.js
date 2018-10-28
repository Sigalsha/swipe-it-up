import {observer, inject} from 'mobx-react';
// import {autorun, reaction, intercept} from 'mobx';
import {observable} from 'mobx';
import React, { Component } from 'react';
import StartGameBtn  from '../Buttons/StartGameBtn';
import Players  from './Players';
import Message  from '../Messages/Message';
import { setInterval, setTimeout } from 'timers';
import Target from "./Target"
import Podium from "../Messages/Podium"
import ScoreTable from "../Messages/ScoreTable"

@inject("store")
@observer
class ManagerBoard extends Component {
  
  @observable showMe = true;
  @observable showReady = false;
  @observable showGo = false;
  @observable showTarget = false;
  @observable showGameEnd = false;
  @observable showGetShot = false;
  @observable showReadyNext = false;
  @observable showGameOver = false;
  
  componentDidMount () {
    this.props.store.socket.on('update state', () => { //from server
      console.log('update state');
    });
    
  } 
  startGame = () => {
    if (this.props.store.gameState==='started'){
      this.props.store.changeGameState('pending');
      return;
    }
    this.props.store.changeGameState('started');
    this.showMe = false;
    setTimeout(this.toggleReady, 0);//ready
    setTimeout(this.toggleReady, 1000);
    setTimeout(this.toggleGo, 1000);//go
    setTimeout(this.toggleGo, 2700);
    setTimeout(this.toggleTarget, 2700);//target
    setTimeout(this.toggleTarget, 6700);
    setTimeout(this.toggleGameEnd, 6700);//time is up
    setTimeout(this.toggleGameEnd, 7700);
    setTimeout(this.toggleGetShot, 7700);//wanna see your shot
    setTimeout(this.toggleGetShot, 9500);
    setTimeout(this.toggleTarget, 9500);// target and shot
    setTimeout(this.toggleTarget, 14000);
    setTimeout(this.toggleGetNext, 14000);// get ready for the next step
    setTimeout(this.toggleGetNext, 16500);
    setTimeout(this.toggleGameOver, 16500);
    setTimeout(this.toggleGameOver, 18500);
    //setTimeout(this.props.store.changeGameState('pending'), 20500);
  }
  
  toggleReady = () => {
    this.showReady = !this.showReady;
  }

  toggleGo = () => {
    this.showGo = !this.showGo;
  }

  toggleTarget = () => {
    this.showTarget = !this.showTarget;
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
  
  messageGo = () => {
    return(
      <div className="mng-board">
      <div className="game-status">Game status:<br/>{this.props.store.gameState}</div>
      <StartGameBtn onClick={this.startGame}/>
      {this.showReady&&<Message content='Ready?!? 1,2,3' class='ready-message'/>}
      {this.showGo&&<Message content='Go' class='go-message'/>}
      {this.showTarget&&<Target/>}
      {this.showGameEnd&&<Message content='Time Is Up!' class='game-end-message'/>}
      {this.showGetShot&&<Message content='Wanna See Your Shot?' class='ready-message'/>}
      {this.showReadyNext&&<Message content='Get ready for the next one!!!' class='ready-next-message'/>}
      {this.showGameOver&&<Message content='Game Over!!!' class='game-end-message'/>}
      {/* {this.showGameOver&&<Podium/>} */}
      </div>)
    }
    
    render() {
      return (
        this.showMe?(<div className="mng-board">
        <div className='url-title'>url:http://localhost:3000/user</div>
        {/* <Players/> */}
        {/* <ScoreTable/> */}
        {/* <Podium/> */}
        <div className="game-status">Game status:<br/>{this.props.store.gameState}</div>
        <StartGameBtn onClick={this.startGame}/>
        </div>):(this.messageGo()));
      }
    }
    export default ManagerBoard;
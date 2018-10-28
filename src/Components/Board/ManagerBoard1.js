import {observer, inject} from 'mobx-react';
import {observable, action} from 'mobx';
import React, { Component } from 'react';
import StartGameBtn  from '../Buttons/StartGameBtn';
import Players  from './Players';
import Message  from '../Messages/Message';
import { setInterval, setTimeout } from 'timers';
import Target from "./Target"
import Podium from "../Messages/Podium"
import ScoreTable from "../Messages/ScoreTable"

function sleep(ms) { 
  return new Promise(resolve => setTimeout(resolve, ms));//resolve reject 
}//return promise not should be async


@inject("store")
@observer
class ManagerBoard1 extends Component {
  
  @observable showMe = true;
  @observable showReady = true;
  @observable showGo = false;
  @observable showTarget = false;
  @observable showGameEnd = false;
  @observable showGetShot = false;
  @observable showReadyNext = false;
  @observable showGameOver = false;
  @observable showPrePodium = false;
  @observable showScore = false;
  @observable showPodium = false;
  @observable showBtn = false;
  
  componentDidMount () {
    this.props.store.socket.on('update state', () => { //from server
      console.log('update state');
    });
    
  }
  
  @action startGame = async () => {
    if (this.props.store.gameState==='starting'){
      return;
    }
    console.log('startGame');
    this.props.store.updateGameStatus('starting');
    this.showMe = false;
    this.showReady = true;
    await sleep(1000);
    this.showReady = false;
    this.showGo = true;
    await sleep(3000);
    this.showGo = false;
    this.showTarget = true;
    await sleep(3000);
    this.showTarget = false;
    this.showGameEnd = true;
    await sleep(3000);
    this.showGameEnd = false;
    this.showGetShot = true;
    await sleep(3000);
    this.showGetShot = false;
    this.showTarget = true;
    await sleep(3000);
    this.showTarget = false;
    this.showReadyNext  = true;
    await sleep(3000);
    this.showReadyNext  = false;
    this.showGameOver = true;
    await sleep(3000);
    this.showGameOver = false;
    this.showReadyNext  = false;
    this.showPrePodium  = true;
    await sleep(3000);
    this.showPrePodium  = false;
    this.showScore  = true;
    await sleep(5000);
    this.showScore  = false;
    this.showPodium  = true;
    await sleep(3000);
    this.showPodium  = false;
    this.props.store.updateGameStatus('pending');
    this.showMe = true;
  }
  
  @action setReady = (value) => {
    this.showReady = value ;
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
      {this.showPrePodium&&<Message content="Let's See Who Won!" class='ready-next-message'/>}
      {this.showScore&&<ScoreTable/>}
      {this.showPodium&&<Podium/>}
      </div>)
    }
    
    render() {
      return (
        this.showMe?(<div className="mng-board">
        <div className='url-title'>url:http://localhost:3000/user</div>
        <Players/>
        <div className="game-status">Game status:<br/>{this.props.store.gameState}</div>
        <StartGameBtn onClick={this.startGame}/>
        </div>):(this.messageGo()));
      }
    }
    export default ManagerBoard1;
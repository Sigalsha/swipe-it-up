import { observer, inject } from 'mobx-react';
import { observable, action } from 'mobx';
import React, { Component } from 'react';
import StartGameBtn from '../Buttons/StartGameBtn';
import Players from './Players';
import Message from '../Messages/Message';
import Target from "./Target"
import Podium from "../Messages/Podium"
import ScoreTable from "../Messages/ScoreTable"
// import Shot from "../Board/Shot"
import Shots from "../Board/Shots"

import { setInterval, setTimeout } from 'timers';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
library.add(faArrowAltCircleRight)


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
  @observable showShot = false;
  
  
  componentDidMount () {
    this.props.store.socket.on('update state', () => { //from server
      console.log('update state');
    });

  }

  @action startGame = async () => {
    if (this.props.store.gameState === 'starting') {
      return;
    }
    console.log('startGame');
    this.props.store.updateGameStatus('starting');
    this.props.store.clearShots();
    this.showMe = false;
    
    this.showReady = true;
    await sleep(1000);
    this.showReady = false;
    this.showGo = true;
    await sleep(1000);
    this.showGo = false;
    this.showTarget = true;
    await sleep(4000);
    this.showTarget = false;
    this.showGameEnd = true;
    await sleep(2000);
    this.showGameEnd = false;
    this.showGetShot = true;
    await sleep(2000);
    this.showGetShot = false;
    this.showTarget = true;
    this.showShot = true;
    await sleep(5000);
    this.showShot = false;
    this.showTarget = false;
    // this.showReadyNext = true;
    // await sleep(3000);
    // this.showReadyNext = false;
    this.showGameOver = true;
    await sleep(2000);
    this.showGameOver = false;
    this.showPrePodium = true;
    await sleep(5000);
    this.showPrePodium = false;
    this.showScore = true;
    await sleep(5000);
    this.showScore = false;
    this.showPodium = true;
    await sleep(3000);
    this.showPodium = false;
    
    
    
    this.props.store.updateGameStatus('pending');
    this.showMe = true;
  }
  
  messageGo = () => {
    return (
      <div className="mng-board">
      <div className="game-status">Game status:<br/>{this.props.store.gameState}</div>
      {this.showBtn&&<StartGameBtn onClick={this.startGame}/>}
      {this.showReady&&<Message content='Ready?!? 1,2,3' class='ready-message'/>}
      {this.showGo&&<Message content='Go' class='go-message'/>}
      {this.showTarget&&<Target/>}
      {this.showGameEnd&&<Message content='Time Is Up!' class='game-end-message'/>}
      {this.showGetShot&&<Message content='Wanna See Your Shot?' class='message-shot'/>}
      {this.showReadyNext&&<Message content='Get ready for the next one!!!' class='ready-message'/>}
      {this.showGameOver&&<Message content='Game Over!!!' class='game-end-message'/>}
      {this.showPrePodium&&<Message content="Let's See Who Won!" class='message-shot'/>}
      {this.showScore&&<ScoreTable/>}
      {this.showPodium&&<Podium/>}
      {this.showShot&&<Shots/>}
      </div>)
  }

  render() {
    return (
      this.showMe ? (
        <div className="mng-board">
          <LinkToCopy />
          <Players />
          {/* <Podium/> */}
          <StartGameBtn onClick={this.startGame} />
          <div className="game-status">Game status:<br />{this.props.store.gameState}</div>
    
        </div>
      ) : (this.messageGo()));
  }
}

const LinkToCopy = () => {
  return (
    <div className='url-title'>
      <span>Copy Link</span>
      <FontAwesomeIcon className="arrow-icon" icon="arrow-alt-circle-right" />
      <span id="url-str">http://localhost:3000/user</span>
      <FontAwesomeIcon className="arrow-icon" icon="arrow-alt-circle-right" />
      <span>send to your players</span>
    </div>
  )
}

export default ManagerBoard1;
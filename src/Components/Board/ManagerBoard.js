import {observer, inject} from 'mobx-react';
import {observable} from 'mobx';
import React, { Component } from 'react';
import StartGameBtn  from '../Buttons/StartGameBtn';
import Players  from './Players';
import Message  from '../Messages/Message';
import { setInterval } from 'timers';





@inject("store")
@observer
class ManagerBoard extends Component {
  
  @observable showMe = true;
  
  toggleShowMe = () => {
    this.showMe = false;
  }
  
  message = () => {
    setTimeout(()=>{
      return(
          <div className="mng-board">
          <Message content='Ready?!? 1,2,3' class='ready-message'/>
          <Message content='Go' class='go-message'/>
          </div>) }, 1000);
    }  
    
    render() {
      return (
        this.showMe?(<div className="mng-board">
        <div className='url-title'>url:http://localhost:3000/XXX</div>
        <StartGameBtn onClick={this.toggleShowMe}/>
        <Players/>
        </div>):(this.message())
        );
      }
    }
    export default ManagerBoard;
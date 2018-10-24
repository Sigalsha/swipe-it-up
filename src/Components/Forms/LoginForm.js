import {observer, inject} from 'mobx-react';
import React, { Component } from 'react';
import ManagerBoard from '../Board/ManagerBoard';
import { subscribeToTimer } from './api';
import { chatMessage } from './api';



@inject("store")
@observer
class LoginForm extends Component {

  state = {
    messageOut:'',
    messageIn:'',
    timestamp: 'no time stamp yet'
  }

  constructor(props) {
    super(props);
    subscribeToTimer((err, timestamp) => this.setState({ 
      timestamp 
    }));
  }


  handleChange = (event) => {
    this.setState({messageOut: event.target.value});
  }

  handleClick = (event) => {
    event.preventDefault();
    let prev = this.state.messageIn;
    chatMessage(this.state.messageOut,
      (err, msg) => {
        this.setState({messageIn:prev + msg})
      });
    //console.log(this.state.messageIn);
  }


  render() {
    return (<div>
      <ManagerBoard message={this.state.messageIn}/>
      <div>Login
      {/* This is the timer value: {this.state.timestamp} */}
      <form>
      <label>
      Name:<input type="text" name="name" value={this.state.messageOut} onChange={this.handleChange} />
      </label>
      <input type="submit" value="Login" onClick={this.handleClick} />
      </form>
      </div></div>
      );
    }
  }
  
  export default LoginForm;
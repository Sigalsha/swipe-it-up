import {observer, inject} from 'mobx-react';
import React, { Component } from 'react';

@inject("store")
@observer
class LoginFormSocket extends Component {

  state = {
    messageOut:'',
    messageIn:''
  }
  
  constructor(props) {
    super(props);
  }
  
  componentDidMount () {
  }
  
  handleChange = (event) => {
    this.setState({messageOut: event.target.value});
  }
  
  handleClick = (event) => {
    event.preventDefault();
    this.props.store.chatMessage(this.state.messageOut); 
  }
  
  render() {
    return (<div>
      <div>{this.props.store.msg}</div>
      <div>Login
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
  
export default LoginFormSocket;
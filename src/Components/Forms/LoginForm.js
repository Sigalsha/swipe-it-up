import {observer, inject} from 'mobx-react';
import React, { Component } from 'react';





@inject("store")
@observer
class LoginForm extends Component {

  state = {
    messageOut:'',
    messageIn:'',
  }

  handleChange = (event) => {
    this.setState({messageOut: event.target.value});
  }

  handleClick = (event) => {
    event.preventDefault();
  }


  render() {
    return (<div>
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
  
  export default LoginForm;
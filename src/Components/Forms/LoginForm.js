import {observer, inject} from 'mobx-react';
import React, { Component } from 'react';

@inject("store")
@observer
class LoginForm extends Component {
  render() {
    return (
      <div>Login
      <form>
      <label>
      Name:<input type="text" name="name" />
      </label>
      <input type="submit" value="Login" />
      </form>
      </div>
      );
    }
  }
  
  export default LoginForm;
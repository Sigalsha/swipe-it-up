import {observer, inject} from 'mobx-react';
import React, { Component } from 'react';

@inject("store")
@observer
class SignUpForm extends Component {
  render() {
    return (
      <div>SignUp
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
  export default SignUpForm;
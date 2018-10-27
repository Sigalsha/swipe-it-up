import {observer, inject} from 'mobx-react';
import {observable} from 'mobx';
import React, { Component } from 'react';
import CreateGameBtn  from '../Buttons/CreateGameBtn';

@inject("store")
@observer
class SignUpForm extends Component {
  
  @observable showMe = true

  onSubmit = (event) => {
    event.preventDefault()
    this.showMe = false;
  }
  
  render() {
    return (
      this.showMe?(<div>Sign Up
        <form onSubmit={this.onSubmit}>
        <label>
        Name:<input type="text" name="name" />
        </label>
        <input type="submit" value="SignUp" />
        </form>
        </div>):
        <CreateGameBtn/>
        );
      }
    }
    export default SignUpForm;
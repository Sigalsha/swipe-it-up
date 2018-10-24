import {observer, inject} from 'mobx-react';
import {observable} from 'mobx';
import React, { Component } from 'react';
import PlayerBoard  from '../Board/PlayerBoard';

@inject("store")
@observer
class SignUpFormUser extends Component {
  
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
        <PlayerBoard/>
        );
      }
    }
    export default SignUpFormUser;
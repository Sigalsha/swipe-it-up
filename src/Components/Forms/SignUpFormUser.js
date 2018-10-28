import {observer, inject} from 'mobx-react';
import {observable} from 'mobx';
import React, { Component } from 'react';
import PlayerBoard  from '../Board/PlayerBoard';

@inject("store")
@observer
class SignUpFormUser extends Component {
  
  @observable showMe = true
  @observable name = ''
  
  handleChange = (event) => {
    this.name = event.target.value;
  }
  
  onSubmit = (event) => {
    event.preventDefault()
    this.props.store.addUser(this.name); //add user to the list of users
    this.props.store.userName = this.name; // add current user
    //i/o to DB
    this.showMe = false;
  }
  
  render() {
    return (
      this.showMe?(<div>Sign Up
        <form onSubmit={this.onSubmit}>
        <label>
        Name:<input type="text" onChange={this.handleChange} name="name" value={this.name} />
        </label>
        <input type="submit" value="SignUp" />
        </form>
        </div>):
        <PlayerBoard/>
        );
      }
    }
    export default SignUpFormUser;
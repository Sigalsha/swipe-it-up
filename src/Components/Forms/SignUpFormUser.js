import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';
import React, { Component } from 'react';
import PlayerBoard from '../Board/PlayerBoard';
import Classroom from '../../images/classroom.svg'


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
    this.props.store.addUser(this.name);
    //i/o to DB
    this.showMe = false;
  }

  render() {
    return (
      this.showMe ? (
        <div>
        <form className="form" onSubmit={this.onSubmit}>
            <label>
              <span className="sign-header">name:</span><input className="input" type="text" onChange={this.handleChange} placeholder={"add your name"} name="name" value={this.name} />
            </label>
            <input className="signBtn" type="submit" value="sign up" />
          </form>
          <Image src={Classroom}/>
        </div>
        ) :
        <PlayerBoard />
    );
  }
}

const Image = ({src}) => {
  return (
    <img className="classroom" src={src} alt="classroom"></img>
  )
}

export default SignUpFormUser;
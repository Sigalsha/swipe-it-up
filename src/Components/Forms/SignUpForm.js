import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';
import React, { Component } from 'react';
import CreateGameBtn from '../Buttons/CreateGameBtn';
import Classroom from '../../images/classroom.png'



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
      this.showMe ? (
        <div>
          <form className="form" onSubmit={this.onSubmit}>
            <label>
              <span className="sign-header">name:</span><input className="input" type="text" name="name" placeholder={"add your name"} />
            </label>
            <input className="signBtn" type="submit" value="sign up" />
          </form>
          <Image src={Classroom} />
        </div>
      ) :
        <div>
          <CreateGameBtn className="create-game-btn"/>
          <Image src={Classroom} />
        </div>
    );
  }
}

const Image = ({ src }) => {
  return (
    <img className="classroom" src={src} alt="classroom"></img>
  )
}

export default SignUpForm;
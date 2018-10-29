import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';
import React, { Component } from 'react';
import PlayerBoard from '../Board/PlayerBoard';
import Classroom from '../../images/classroom.png'


@inject("store")
@observer
class SignUpFormUser extends Component {
  constructor(){
    super()
    this.state = {mobileView:false};
  }

  @observable showMe = true
  @observable name = ''

  handleChange = (event) => {
    this.name = event.target.value;
  }

  onSubmit = (event) => {
    if(!this.name) {
      alert("Please add your name to start playing");
      return;
    }
    if(window.innerHeight > window.innerWidth){
      alert("Please use Landscape and then continue");
    }
    else{
      // alert("Youre good!!");
      this.setState({
        mobileView:true
      });

    event.preventDefault()
    this.props.store.addUser(this.name); //add user to the list of users
    this.props.store.userName = this.name; // add current user
    //i/o to DB
    this.showMe = false;
    }
  }

  render() {

    // if (!this.state.mobileView) {
    //   return(
    //     <div>Change your direction</div>
    //   )
    // } 

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
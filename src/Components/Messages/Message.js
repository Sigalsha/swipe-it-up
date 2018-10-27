import {observer, inject} from 'mobx-react';
import {observable} from 'mobx';
import React, { Component } from 'react';



@inject("store")
@observer
class Message extends Component {

  @observable showMe = true;
  
  toggleShowMe = () => {
    this.showMe = false;
  }


  render() {
    return (<div className={this.props.class}>{this.props.content}</div>)
    }
  }
  export default Message;
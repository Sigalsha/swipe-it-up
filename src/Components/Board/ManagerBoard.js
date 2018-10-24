import {observer, inject} from 'mobx-react';
import React, { Component } from 'react';




@inject("store")
@observer
class ManagerBoard extends Component {

  state = {
    message:''
  }

  render() {
    console.log(this.props.message);
    return (
      <div className="mng-board">ManagerBoard
      <div>{this.props.message}</div>
      </div>
      
      );
    }
  }
  export default ManagerBoard;
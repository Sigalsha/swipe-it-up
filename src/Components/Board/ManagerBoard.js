import {observer, inject} from 'mobx-react';
import React, { Component } from 'react';

@inject("store")
@observer
class ManagerBoard extends Component {
  render() {
    return (
      <div>ManagerBoard</div>
      );
    }
  }
  export default ManagerBoard;
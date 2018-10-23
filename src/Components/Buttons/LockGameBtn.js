import {observer, inject} from 'mobx-react';
import React, { Component } from 'react';

@inject("store")
@observer
class LockGameBtn extends Component {
  render() {
    return (
      <div>LockGameBtn</div>
      );
    }
  }
  export default LockGameBtn;
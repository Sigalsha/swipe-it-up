import {observer, inject} from 'mobx-react';
import React, { Component } from 'react';

@inject("store")
@observer
class StartGameBtn extends Component {
  render() {
    return (
      <div>StartGameBtn</div>
      );
    }
  }
  export default StartGameBtn;
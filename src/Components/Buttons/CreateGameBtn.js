import {observer, inject} from 'mobx-react';
import React, { Component } from 'react';

@inject("store")
@observer
class CreateGameBtn extends Component {
  render() {
    return (
      <div>CreateGameBtn</div>
      );
    }
  }
  export default CreateGameBtn;
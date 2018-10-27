import {observer, inject} from 'mobx-react';
import React, { Component } from 'react';

@inject("store")
@observer
class PlayAgain extends Component {
  render() {
    return (
      <div>PlayAgain</div>
      );
    }
  }
  export default PlayAgain;
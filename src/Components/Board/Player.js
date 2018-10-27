import {observer, inject} from 'mobx-react';
import React, { Component } from 'react';

@inject("store")
@observer
class Player extends Component {
  render() {
    return (
      <div>Player</div>
      );
    }
  }
  export default Player;
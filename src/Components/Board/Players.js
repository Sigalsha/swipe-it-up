import {observer, inject} from 'mobx-react';
import React, { Component } from 'react';

@inject("store")
@observer
class Players extends Component {
  render() {
    return (
      <div className="players">Players</div>
      );
    }
  }
  export default Players;
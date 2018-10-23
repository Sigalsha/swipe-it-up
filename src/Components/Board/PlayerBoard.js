import {observer, inject} from 'mobx-react';
import React, { Component } from 'react';

@inject("store")
@observer
class PlayerBoard extends Component {
  render() {
    return (
      <div>PlayerBoard
      </div>
      );
    }
  }
  export default PlayerBoard;
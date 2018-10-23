import {observer, inject} from 'mobx-react';
import React, { Component } from 'react';

@inject("store")
@observer
class Shot extends Component {
  render() {
    return (
      <div>Shot</div>
      );
    }
  }
  export default Shot;
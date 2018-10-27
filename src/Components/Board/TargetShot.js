import {observer, inject} from 'mobx-react';
import React, { Component } from 'react';


@inject("store")
@observer
class TargetShot extends Component {
  render() {
    return (
      <div className="target"></div>
      );
    }
  }
export default TargetShot;
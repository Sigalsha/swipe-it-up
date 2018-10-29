import { observer, inject } from 'mobx-react';
import React, { Component } from 'react';
// import Plane from '../../images/paper_plane_red.svg'
import ReactDOM from 'react-dom';
import { action, observable } from 'mobx';
import TargetTransperent from './TargetTransperent'


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

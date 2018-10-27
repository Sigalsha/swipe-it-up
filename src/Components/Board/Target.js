import {observer, inject} from 'mobx-react';
import React, { Component } from 'react';
import pic from '../../pictures/teacher_transparent.jpg';





@inject("store")
@observer
class Target extends Component {
  render() {
    return (
      <div className="target"></div>
      );
    }
  }
  export default Target;
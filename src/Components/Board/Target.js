import {observer, inject} from 'mobx-react';
import React, { Component } from 'react';

@inject("store")
@observer
class Target extends Component {
  render() {
    return (
      <div>Target
      </div>
      );
    }
  }
  export default Target;
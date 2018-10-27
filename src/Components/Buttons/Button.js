import {observer, inject} from 'mobx-react';
import React, { Component } from 'react';

@inject("store")
@observer
class Button extends Component {
  render() {
    return (
      <div>Button</div>
      );
    }
  }
  export default Button;
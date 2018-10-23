import {observer, inject} from 'mobx-react';
import React, { Component } from 'react';

@inject("store")
@observer
class Dart extends Component {
  render() {
    return (
      <div>Dart
      </div>
      );
    }
  }
  export default Dart;
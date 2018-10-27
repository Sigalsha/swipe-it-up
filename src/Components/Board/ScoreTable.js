import {observer, inject} from 'mobx-react';
import React, { Component } from 'react';

@inject("store")
@observer
class ScoreTable extends Component {
  render() {
    return (
      <div>ScoreTable
      </div>
      );
    }
  }
  export default ScoreTable;
import { observer, inject } from 'mobx-react';
import React, { Component } from 'react';

@inject("store")
@observer
class StartGameBtn extends Component {
  startGame = () => {
    this.props.onClick();
  }
  render() {
    return (
      <div className="start-game-btn" onClick={this.startGame}>
        start game
    </div>
    );
  }
}
export default StartGameBtn;
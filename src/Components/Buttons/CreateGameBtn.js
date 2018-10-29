import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import StartGameBtn from './StartGameBtn';
import ManagerBoard1 from '../Board/ManagerBoard1';

@inject("store")
@observer
class CreateGameBtn extends Component {

  @observable showMe = true

  createGame = () => {
    this.showMe = false;
  }

  render() {
    return (
      this.showMe ?
        (
          <div className="create-game-btn" onClick={this.createGame}>
            <Link id="link-to-game" to="/Game">Create Game</Link>
          </div>
        )
        : (<ManagerBoard1 />)
    )
  }
}
export default CreateGameBtn;
import { observer, inject } from 'mobx-react';
import React, { Component } from 'react';



@inject("store")
@observer
class Players extends Component {

  getUsers = () => {
    if (!this.props.store.users) {
      return (<div></div>)
    }
    let users = this.props.store.users;
    return (users.map(user => { return (<div>{user.name}</div>) }))
  }

  render() {
    return (
      <div className="players">
        <span id="players-header">Players online:</span><div>
          {this.getUsers()}</div>
      </div>
    );
  }
}
export default Players;
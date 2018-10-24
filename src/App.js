import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { observer, inject } from 'mobx-react';
import Axios from 'axios';

@inject("store")
@observer
class App extends Component {
  state = {
    result: ''
  };

  componentDidMount = async () => {
    let result = await this.addUser();
    alert(result);
    this.setState({ result: result })
  }

  // addUser = async () => {
  //   try {
  //     let response = await axios.post('/user', { userName: "bob" })
  //     return (response);
  //   }
  //   catch (err) {
  //     console.log(err)
  //   }
  // }

  addUser = async () => {
    let name = "bob";
    try {
      const response = await Axios.post('/user', { name });
      console.log(response)
      return response;
    }
    catch (err) {
      console.error(err);
      // response.status(500).send(err)
    }
  };


  render() {
    console.log("res:" + this.state.response);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            res:{this.state.result}
            {/* <ul>
              {this.props.store.users.map((user, i) => <li key={i}>{user.name}</li>)}
            </ul> */}
          </p>
        </header>
      </div>
    );
  }
}

export default App;

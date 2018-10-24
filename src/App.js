import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { observer, inject } from 'mobx-react';
import axios from 'axios';

@inject("store")
@observer
class App extends Component {
  state = {
    nameFromServer: '',
    name: "tina"
  };

  componentDidMount = async () => {
    let result = await this.addUser();
    this.setState({ nameFromServer: result })
  }

     /*put req. to the server, updating the client
            axios.put('http://localhost:8100/clients', {
                id: newObject.id,
                name: name,
                country: country
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
          */

  addUser = async () => {
    let name = "tina"
    axios.post('/user', name)
    .then((res)=> {
      console.log(name)
      console.log(res);
    })
    .catch((err)=>{
      console.log(err)
    })
  };


  render() {
    console.log("res:" + this.state.result);
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

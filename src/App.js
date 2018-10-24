import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {observer, inject} from 'mobx-react';
import axios from 'axios';
import LoginForm from './Components/Forms/LoginForm';
// import SignUpForm from './Components/Forms/SignUpForm';
// import Dart from './Components/Board/Dart';



@inject("store")
@observer
class App extends Component {
  state = {
    response: '',
    input:''
  };
  
  componentDidMount() {
    this.callApi()
    .then(res => this.setState({ response: res.express }))
    .catch(err => console.log(err));
  }
  
  callApi = async () => {
    const response = await axios.get('/api/hello');
    const body = await response.data;
    
    if (response.status !== 200) throw Error(body.message);
    
    return body;
  };
  
  
  render() {
    console.log("res:"+this.state.response);
    return (
      <div className="App">
      <header className="App-header">
      
      <LoginForm/>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <p>
      {/* Res: {this.state.response} */}
      {/* <ul> */}
      {/* {this.props.store.users.map((user,i)=><li key={i}>{user.name}</li>)} */}
      {/* </ul>  */}
      </p>
      </header>
      </div>
      );
    }
  }
  
  export default App;
  
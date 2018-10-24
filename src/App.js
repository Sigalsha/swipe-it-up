import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import {observer, inject} from 'mobx-react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import LoginFormSocket from './Components/Forms/LoginFormSocket';
import SignUpForm from './Components/Forms/SignUpForm';
import LoginForm from './Components/Forms/LoginForm';
import ManagerBoard from './Components/Board/ManagerBoard';
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
      <Router>
      <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="navbar-header nav navbar-nav">
      <li><Link className="navbar-brand" to="/"></Link></li>
      <li><Link className="navbar-brand" to="/Login">Log in</Link></li>
      <li><Link className="navbar-brand" to="/Register">Sign Up</Link></li>
      </ul>
      </nav>
      <Route path="/" exact render={() => (<div>Welcome to Swipe it up </div>)} />
      <Route path="/Login" exact render={() => (<LoginForm/>)} />
      <Route path="/Register" exact render={() => (<SignUpForm/>)} />
      <Route path="/Game" exact render={() => (<ManagerBoard/>)} />
      <header className="">
      <p>
      {/* Res: {this.state.response} */}
      </p>
      </header>
      </div>
      </Router>
      );
    }
  }
  
  export default App;
  
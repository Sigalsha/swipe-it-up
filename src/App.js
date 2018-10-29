import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { observer, inject } from 'mobx-react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import LoginFormSocket from './Components/Forms/LoginFormSocket';
import Home from './Components/Home';
import SignUpForm from './Components/Forms/SignUpForm';
// import LoginForm from './Components/Forms/LoginForm';
import ManagerBoard from './Components/Board/ManagerBoard';
import SignUpFormUser from './Components/Forms/SignUpFormUser';
import Classroom from './images/classroom.svg'

@inject("store")
@observer
class App extends Component {
  state = {
    response: '',
    input: '',

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

  // toggleImage = () => {
  //   if (this.state.image){
  //     this.setState({image: false})
  //   } else {
  //     this.setState({image: true})
  //   }
  // }

 



  render() {
    console.log("res:" + this.state.response);
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route path="/" exact render={() => ( <Home src={Classroom}/>)} />
          <Route path="/Register" exact render={() => (<SignUpForm src={Classroom} />)} />
          <Route path="/Game" exact render={() => (<ManagerBoard src={Classroom} />)} />
          <Route path="/User" exact render={() => (<SignUpFormUser src={Classroom} />)} />
          {/* <Route path="/Login" exact render={() => (<LoginForm/>)} /> */}
        </div>
      </Router>
    );
  }
}


const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="nav-item" to="/" >home</Link>
      <Link className="nav-item" to="/Register">sign up</Link>
      <Link className="nav-item" to="/credits">credits</Link>
    </nav>
  )
}

export default App;

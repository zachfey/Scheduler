import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Scheduler from "./pages/scheduler";
import Header from "./components/Header";
import SignUp from './components/SignUp'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import axios from 'axios';

// function App({ authenticated, checked }) {
class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      user: null,
      checked: false
    }

    this.logIn = this.logIn.bind(this)
    this.logOut = this.logOut.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  getUser(cb) {
    axios.get('/api/auth/user').then(response => {
      // console.log('Get user response: ', response.data)
      if (response.data.user) {
        // console.log('Get User: There is a user saved in the server session: ')
        this.setState({
          loggedIn: true,
          user: response.data.user.username,
          checked: true
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          user: null,
          checked: true
        })
      }

    })
  }

  logIn(username) {
    sessionStorage.setItem('loggedIn', true);
    console.log('session storage', sessionStorage.getItem('loggedIn'))
    this.setState({
      user: username,
      loggedIn: true
    })
  }

  logOut(){
    console.log('logging out')
    axios.post('/api/auth/logout').then(res =>{
      console.log(res);
      this.setState({
        user: null,
        loggedIn: false
      })
    })
  }

  nothing(){
    <Router>
    {this.state && this.state.checked &&
      <React.Fragment>
        <Header 
          loggedIn = {this.state.loggedIn}
          user = {this.state.user}
          logOut = {this.logOut}
        />
        {/* <SignUp/> */}
        <Switch>
          <PrivateRoute exact path="/" component={Scheduler} authenticated={this.state.loggedIn} />
          <Route path="/login" render={(props) => <Login  {...props} logIn={this.logIn} />} />
        </Switch>
      </React.Fragment>
    }
  </Router>
  }

  render() {
    return (
      <Scheduler />

    );
  }
}

export default App;
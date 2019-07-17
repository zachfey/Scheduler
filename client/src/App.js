import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Scheduler from "./pages/scheduler";
import Nav from "./components/Nav";
import SignUp from './components/SignUp'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'

// function App() {
class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      user: null
    }

    this.logIn = this.logIn.bind(this)
  }

  logIn(username){
    this.setState({
      user: username,
      loggedIn: true
    })
  }

  render() {
    console.log('back to app', this.state)
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/login' render={(props) => <Login  {...props} logIn = {this.logIn}/>}/>
            <PrivateRoute path='/' component={Scheduler} loggedIn = {this.state.loggedIn} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

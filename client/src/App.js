import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { sessionService } from 'redux-react-session'
import Scheduler from "./pages/scheduler";
import Nav from "./components/Nav";
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
      console.log('Get user response: ', response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')
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


  render() {
    return (
      <Router>
        {this.state && this.state.checked &&
          <React.Fragment>
            <Nav 
              loggedIn = {this.state.loggedIn}
              user = {this.state.user}
              logOut = {this.logOut}
            />
            <Switch>
              <PrivateRoute exact path="/" component={Scheduler} authenticated={this.state.loggedIn} />
              <Route path="/login" render={(props) => <Login  {...props} logIn={this.logIn} />} />
            </Switch>
          </React.Fragment>
        }
      </Router>
    );
  }
}
// const App = ({ authenticated}) => (

//   <Router>
//       <div>
//         <Nav />
//         <Switch>
//           <Route exact path='/signup' component={SignUp} />
//           <Route exact path='/login' render={(props) => <Login  {...props} logIn={this.logIn} />} />
//           <PrivateRoute exact path='/' component={Scheduler} authenticated={authenticated} />
//         </Switch>
//       </div>
//   </Router>
// );
// const App = ({ authenticated, checked }) => (
//   <Router>
//     { checked &&
//       <div>
//         <PrivateRoute exact path="/" component={Scheduler} authenticated={authenticated}/>
//         <Route path="/login" component={Login}/>
//       </div>
//     }
//   </Router>
// );




export default App;
// export default App

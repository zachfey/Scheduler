import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Scheduler from "./pages/scheduler";
import Nav from "./components/Nav";
import SignUp from './components/SignUp'
import Login from './components/Login'

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path = '/signup' component = {SignUp} />
          <Route exact path = '/login' component = {Login} />
          <Route exact path = '/' component = {Scheduler} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

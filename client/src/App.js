import React from "react";
import Scheduler from "./pages/scheduler";
import Nav from "./components/Nav";
const moment = require('moment')

function App() {
  const currYear = moment().format('YYYY')
  return (
    <div>
      <Nav />
      <Scheduler currYear = {currYear}/>
    </div>
  );
}

export default App;

import React from "react";

function Nav(props) {
  console.log('nav props', props)
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Raft1 Scheduler
      </a>
      {props.user ?
        (
          <React.Fragment>
            <p>Welcome, {props.user}</p>
            <button
              onClick={props.logOut}
            >Log Out</button>
          </React.Fragment>
        )
        :
          <p>Log In!</p>
    }

    </nav>
  );
}

export default Nav;

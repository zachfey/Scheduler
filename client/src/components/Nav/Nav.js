import React from "react";
import { useAuth0 } from "../../react-auth0-wrapper";

function Nav() {
  const {isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        React Reading List
      </a>
      <div>
      {!isAuthenticated && (
        <button
          onClick={() =>
            loginWithRedirect({})
          }
        >
          Log in
        </button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
    </div>
  );
    </nav>
  );
}

export default Nav;

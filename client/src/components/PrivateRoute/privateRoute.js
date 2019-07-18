import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from 'react-router-dom';

const PrivateRoute = ({ component: Component, exact = false, path, authenticated }) => (


    // <Route {...rest} render={(props) => {
    //     console.log('private route props', rest);
    //     console.log(props)
    //     if (rest.loggedIn) {
    //         return <Component {...props} />
    //     } else {
    //         return <Redirect to={'/login'} />
    //     }
    // // }} />
    <Route
        exact={exact}
        path={path}
        render={(props) => (
            authenticated ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{
                        pathname: '/login',
                        state: { from: props.location }
                    }} />
                )
        )}
    />
)


export default PrivateRoute
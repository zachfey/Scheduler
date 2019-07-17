import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (

    <Route {...rest} render={(props) => {
        console.log('private route props', rest);
        console.log(props)
        if (rest.loggedIn) {
            return <Component {...props} />
        } else {
            return <Redirect to={'/login'} />
        }
    }} />
)

export default PrivateRoute
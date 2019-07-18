import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { sessionService, sessionReducer } from 'redux-react-session';
import thunkMiddleware from 'redux-thunk';
import App from "./App";
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

// const reducer = combineReducers({
//     session: sessionReducer
// });

// const store = createStore(reducer, undefined, compose(applyMiddleware(thunkMiddleware)));

// sessionService.initSessionService(store);

ReactDOM.render(
    // <Provider store={store}>
        <App />, document.getElementById("root")
    // </Provider>, document.getElementById("root")
);

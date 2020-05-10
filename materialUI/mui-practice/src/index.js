import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'assets/scss/material-kit-pro-react.css?v=1.2.0';
import { createBrowserHistory } from 'history';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router } from 'react-router-dom';

let hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
        <App />
    </Router>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Home from './components/pages/home';
import Profile from './components/pages/account';
import reducer from './reducers';

import './styles.scss';

import './assets/fonts/fonts.scss';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

function onDeviceReady() {
    if (window.StatusBar) {
        window.StatusBar.backgroundColorByHexString('#fff');
        window.StatusBar.overlaysWebView(false);
        window.StatusBar.styleDefault();
    }

    render(
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/feed" component={Home} />
                    <Route path="/profile" component={Profile} />
                    <Redirect from="/" to="/feed" />
                </Switch>
            </Router>
        </Provider>,
        document.getElementById('app'),
    );
}

// document.addEventListener('deviceready', onDeviceReady);
onDeviceReady();

import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import {
    AccountProfile,
    CollectionDetail,
    CreateEmpty,
    CreateDescription,
    CreateLink,
    Search,
    Home,
    LinkPreview,
} from './blocks';
import reducer from './reducers';

import './styles.scss';
import './assets/fonts/fonts.scss';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

function onDeviceReady() {
    if (window.StatusBar && window.cordova) {
        if (window.cordova.platformId === 'android') {
            window.StatusBar.backgroundColorByHexString('#000');
        } else {
            window.StatusBar.styleDefault();
        }
        window.StatusBar.overlaysWebView(false);
    }

    render(
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/feed" component={Home} />
                    <Route path="/create-link" component={CreateLink} />
                    <Route path="/create-empty" component={CreateEmpty} />
                    <Route path="/create-description" component={CreateDescription} />
                    <Route path="/collection-detail" component={CollectionDetail} />
                    <Route path="/profile" component={AccountProfile} />
                    <Route path="/search" component={Search} />
                    <Route path="/preview" component={LinkPreview} />
                    <Redirect from="/" to="/feed" />
                </Switch>
            </Router>
        </Provider>,
        document.getElementById('app'),
    );
}

document.addEventListener('deviceready', onDeviceReady);
// onDeviceReady();

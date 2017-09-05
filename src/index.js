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
    Modal,
    Onboarding,
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
                <div className="home__wrapper">
                    <Modal />
                    <Switch>
                        <Route path="/feed" component={Home} />
                        <Route path="/create-link" component={CreateLink} />
                        <Route path="/create-empty" component={CreateEmpty} />
                        <Route path="/add-description" component={CreateDescription} />
                        <Route
                            path="/collection/:id/:filter?"
                            render={({ match }) => (
                                <CollectionDetail params={match.params} />
                            )}
                        />
                        <Route path="/profile" component={AccountProfile} />
                        <Route path="/search" component={Search} />
                        <Route path="/preview" component={LinkPreview} />
                        <Route path="/onboarding" component={Onboarding} />
                        <Redirect from="/" to="/feed" />
                    </Switch>
                </div>
            </Router>
        </Provider>,
        document.getElementById('app'),
    );
}

if (typeof window.cordova !== 'undefined') {
    document.addEventListener('deviceready', onDeviceReady);
} else {
    // for browser
    onDeviceReady();
}

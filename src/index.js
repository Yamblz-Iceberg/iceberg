import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home';
import reducer from './reducers';

import './styles.scss';

const store = createStore(reducer, {}, composeWithDevTools(applyMiddleware(thunk)));

function onDeviceReady() {
    /* eslint-disable */
    if (StatusBar) {
        StatusBar.backgroundColorByHexString('#fff');
        StatusBar.overlaysWebView(false);
        StatusBar.styleDefault();
    }
    /* eslint-enable */

    render(
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/" component={Home} />
                    <Route path="*" render={() => <h1>Страница не найдена</h1>} />
                </Switch>
            </Router>
        </Provider>,
        document.getElementById('app'),
    );
}

// document.addEventListener('deviceready', onDeviceReady);
onDeviceReady();

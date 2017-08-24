import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Router, Route } from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';

import Home from './components/pages/Home';

import reducer from './reducers';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(createBrowserHistory(), store);

render(
    <Provider store={store}>
        <Router history={history}>
            <Route exact path="/" component={Home} />
        </Router>
    </Provider>,
    document.getElementById('app'),
);

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Tabs } from './../blocks';
import { Feed } from './../part';

const tabs = [
    {
        id: 1,
        title: 'Моя лента',
        linkTo: '/feed',
    },
    {
        id: 2,
        title: 'Новое',
        linkTo: '/feed/new',
    },
];

const Home = () => (
    <div className="main-wrap">
        <Tabs tabs={tabs} />
        <Switch>
            <Route exact path="/feed">
                <Feed />
            </Route>
            <Route path="/feed/new">
                <h1>Новое</h1>
            </Route>
        </Switch>
    </div>
);

export default Home;

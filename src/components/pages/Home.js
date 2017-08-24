import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Tabs } from './../blocks';

const tabs = [
    {
        id: 1,
        title: 'Моя лента',
        linkTo: '/',
    },
    {
        id: 2,
        title: 'Новое',
        linkTo: '/new',
    },
];

const Home = () => (
    <div className="main-wrap">
        <Tabs tabs={tabs} />
        <Switch>
            <Route exact path="/">
                <h1>Лента</h1>
            </Route>
            <Route path="/new">
                <h1>Новое</h1>
            </Route>
        </Switch>
    </div>
);

export default Home;

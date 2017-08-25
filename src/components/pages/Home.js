import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import { Tabs, HomeHeader } from './../blocks';
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
    <main className="main-wrap">
        <HomeHeader />
        <Tabs tabs={tabs} />
        <NavLink to={'/profile'} activeClassName="tab__link-active">User</NavLink>
        <Switch>
            <Route exact path="/feed">
                <Feed />
            </Route>
            <Route path="/feed/new">
                <h1>Новое</h1>
            </Route>
        </Switch>
    </main>
);

export default Home;

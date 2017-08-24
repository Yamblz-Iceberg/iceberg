import React from 'react';
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
    <div>
        Hello, world!
        <Tabs tabs={tabs} />
    </div>
);

export default Home;

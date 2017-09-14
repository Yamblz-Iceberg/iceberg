import React from 'react';
import PropTypes from 'prop-types';

import { HomeTopBar, Tabs } from '../../../blocks';

import './home__header.scss';

/**
 * Компонент шапки главного экрана приложения.
 * Состоит из верхнего бара и табов:
 * - "Моя лента", где ранжируются элементы по рейтингу и предпочтениям пользователя;
 * - "Новое", лента с ранжированием по времени.
 */
const HomeHeader = ({ user }) => {
    const tabs = [
        {
            id: 1,
            title: 'Моя лента',
            linkTo: '/feed',
        },
        {
            id: 2,
            title: 'Новое',
            linkTo: '/feed/time',
        },
    ];

    return (<header className="home__header">
        <HomeTopBar user={user} />
        <Tabs tabs={tabs} />
    </header>);
};

HomeHeader.propTypes = {
    user: PropTypes.object,
};

HomeHeader.defaultProps = {
    user: {},
};

export default HomeHeader;

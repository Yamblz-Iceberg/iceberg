import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '../../elements';

import './home-header.scss';

const HomeHeader = () => (
    <header className="home-header">
        <div className="home-header__container">
            <div className="home-header__block">
                <Icon iconName={'search'} />
                <h3 className="home-header__title">Айсберг</h3>
            </div>
            <div className="home-header__block">
                <Icon iconName={'archive'} />
                <NavLink to={'/profile'}>
                    <Icon className="home-header__icon-settings" iconName={'account'} />
                </NavLink>
            </div>
        </div>
    </header>
);

export default HomeHeader;

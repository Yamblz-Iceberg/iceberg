import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '../../elements';

import './home-header.scss';

const HomeHeader = () => (
    <header className="home-header">
        <div className="home-header__container">
            <div className="home-header__block">
                <Icon iconName={'search'} iconHeight="20" iconWidth="20" />
                <h3 className="home-header__title">Айсберг</h3>
            </div>
            <div className="home-header__block">
                <Icon iconName={'archive'} iconHeight="18" iconWidth="18" />
                <NavLink to={'/profile'}>
                    <Icon className="home-header__icon-settings" iconName={'account'} iconHeight="20" iconWidth="20" />
                </NavLink>
            </div>
        </div>
    </header>
);

export default HomeHeader;

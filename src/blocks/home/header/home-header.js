import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Icon, Avatar } from '../../../blocks';

import './home-header.scss';

const HomeHeader = ({ user }) => (
    <header className="home-header">
        <div className="home-header__container">
            <div className="home-header__block">
                <NavLink to={'/search'}>
                    <Icon iconName={'search'} />
                </NavLink>
                <h4 className="home-header__title">Айсберг</h4>
            </div>
            <div className="home-header__block">
                <NavLink to={'/authorization'}>
                    <Icon iconName={'flash'} />
                </NavLink>
                <NavLink to={'/profile'} className="home-header__icon-user">
                    <div>
                        <Avatar photo={user.photo} />
                    </div>
                </NavLink>
            </div>
        </div>
    </header>
);

HomeHeader.propTypes = {
    user: PropTypes.object,
};

HomeHeader.defaultProps = {
    user: {},
};

export default HomeHeader;

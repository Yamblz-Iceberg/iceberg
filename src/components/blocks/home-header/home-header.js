import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Icon, Avatar } from '../../elements';

import './home-header.scss';

const HomeHeader = ({ user }) => (
    <header className="home-header">
        <div className="home-header__container">
            <div className="home-header__block">
                <Icon iconName={'search'} iconHeight="20" iconWidth="20" />
                <h3 className="home-header__title">Айсберг</h3>
            </div>
            <div className="home-header__block">
                <Icon iconName={'archive'} iconHeight="20" iconWidth="20" />
                <NavLink to={'/profile'}>
                    <div className="home-header__icon-user">
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

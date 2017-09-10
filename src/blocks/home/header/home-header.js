import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Icon, Avatar } from '../../../blocks';

import './home-header.scss';

const HomeHeader = ({ user, history, userData }) => {
    const navigateTo = (path) => {
        if (typeof userData.accType !== 'undefined' && userData.accType !== 'demo') {
            history.push({ pathname: path });
        } else {
            localStorage.setItem('returnToAfterAuth', history.location.pathname);
            history.push('/authorization');
        }
    };
    return (
        <header className="home-header">
            <div className="home-header__container">
                <div className="home-header__block">
                    <NavLink to={'/search'}>
                        <Icon iconName={'search'} />
                    </NavLink>
                    <h4 className="home-header__title">Айсберг</h4>
                </div>
                <div className="home-header__block">
                    <span className="home-header__icon-user" onClick={() => { navigateTo('/profile'); }}>
                        <div>
                            {
                                typeof userData.accType !== 'undefined' && userData.accType !== 'demo'
                                    ? <Avatar photo={user.photo} />
                                    : <Icon iconName="account" />
                            }
                        </div>
                    </span>
                </div>
            </div>
        </header>
    );
};

HomeHeader.propTypes = {
    user: PropTypes.object,
    history: PropTypes.object.isRequired,
    userData: PropTypes.object.isRequired,
};

HomeHeader.defaultProps = {
    user: {},
};

export default connect(
    state => ({
        userData: state.user.data,
    }),
)(withRouter(HomeHeader));

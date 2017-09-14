import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Icon, Avatar } from './../../blocks';

import { userLoader } from '../../reducers/user.reducer';

import './home-top-bar.scss';

/**
 * Компонент верхнего бара главного экрана приложения.
 * Является частью Home Header.
 * Содержит ссылки на поиск и профиль текущего пользователя.
 */
class HomeTopBar extends Component {
    static propTypes = {
        authorization: PropTypes.object.isRequired,
        userLoader: PropTypes.func.isRequired,
        user: PropTypes.object,
        history: PropTypes.object.isRequired,
    };

    static defaultProps = {
        user: {},
    };

    componentDidMount() {
        this.props.userLoader(this.props.authorization.access_token);
    }

    navigateTo = (path) => {
        if (typeof this.props.user.data.accType !== 'undefined' && this.props.user.data.accType !== 'demo') {
            this.props.history.push({ pathname: path });
        } else {
            localStorage.setItem('returnToAfterAuth', this.props.history.location.pathname);
            this.props.history.push('/authorization');
        }
    };

    render() {
        const userData = this.props.user.data;
        return (
            <div className="home-top-bar">
                <div className="home-top-bar__block">
                    <NavLink to={'/search'}>
                        <Icon iconName={'search'} />
                    </NavLink>
                    <h4 className="home-top-bar__title">Айсберг</h4>
                </div>
                <div className="home-top-bar__block">
                    <span className="home-top-bar__icon-user" onClick={() => { this.navigateTo('/profile'); }}>
                        <div>
                            {
                                typeof userData.accType !== 'undefined' && userData.accType !== 'demo'
                                    ? <Avatar photo={userData.photo} />
                                    : <Icon iconName="account" />
                            }
                        </div>
                    </span>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({
        user: state.user,
        authorization: state.authorization,
    }),
    { userLoader },
)(withRouter(HomeTopBar));

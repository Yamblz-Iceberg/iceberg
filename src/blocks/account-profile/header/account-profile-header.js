import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { authDemoUser } from '../../../utils/shared-functions';
import { Icon } from '../../../blocks';
import { logOut, registerDemoUser } from '../../../reducers/authorization.reducer';

import './account-profile-header.scss';
import { ContextMenu } from '../../index';

class ProfileHeader extends Component {
    static propTypes = {
        authorization: PropTypes.object.isRequired,
        logOut: PropTypes.func.isRequired,
        registerDemoUser: PropTypes.func.isRequired,
        history: PropTypes.object.isRequired,
    };

    logOutProfile = () => {
        this.props.logOut(
            this.props.authorization.access_token,
            this.props.authorization.refresh_token,
            this.logOutLocal,
        );
    };

    logOutLocal = () => {
        authDemoUser(
            this.props.registerDemoUser,
            this.saveLocal,
        );
    };

    saveLocal = () => {
        localStorage.setItem('IcebergUserData', JSON.stringify(this.props.authorization));
        this.props.history.push('/feed');
    };

    render() {
        const contextMenuItems = [
            {
                title: 'Выйти из профиля',
                id: 0,
                icon: <Icon iconName={'exit'} />,
                onClick: () => this.logOutLocal(),
            },
        ];
        return (
            <header className="profile-header">
                <div className="profile-header__container">
                    <div className="profile-header__block">
                        <NavLink to={'/feed'}>
                            <Icon iconName="arrow-back" iconColor="#fff" />
                        </NavLink>
                    </div>
                    <div className="profile-header__block" onClick={this.logOutProfile}>
                        <ContextMenu iconName="settings" items={contextMenuItems} />
                    </div>
                </div>
            </header>
        );
    }
}

export default connect(
    state => ({ authorization: state.authorization }),
    { logOut, registerDemoUser },
)(withRouter(ProfileHeader));

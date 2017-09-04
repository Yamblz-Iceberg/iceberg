import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '../../../blocks';

import './account-profile-header.scss';

const ProfileHeader = () => (
    <header className="profile-header">
        <div className="profile-header__container">
            <div className="profile-header__block">
                <NavLink to={'/feed'}>
                    <Icon iconName="arrow-back" iconColor="#fff" iconHeight="16" iconWidth="16" />
                </NavLink>
            </div>
            <div className="profile-header__block">
                <NavLink to={'/profile'}>
                    <Icon
                        className="home-header__icon-settings"
                        iconName="settings"
                        iconColor="#fff"
                        iconHeight="20"
                        iconWidth="20"
                    />
                </NavLink>
            </div>
        </div>
    </header>
);

export default ProfileHeader;

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { Avatar } from './../../elements';

import './user-info.scss';

const UserInfo = ({ user }) => (
    <div className="user__info">
        <Avatar photo={user.photo} size={120} />
        <h1 className="user__name">{user.name} {user.lastname}</h1>
        <p className="user__description">{user.description}</p>
        <NavLink to={'/'} activeClassName="tab__link-active">Назад</NavLink>
    </div>
);

UserInfo.propTypes = {
    user: PropTypes.object.isRequired,
};

export default UserInfo;

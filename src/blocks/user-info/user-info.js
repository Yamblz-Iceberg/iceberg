import React from 'react';
import PropTypes from 'prop-types';

import { Avatar, RatingInfo } from './../../blocks';

import './user-info.scss';

const UserInfo = ({ user }) => (
    <div className="user-info">
        <Avatar photo={user.photo} size={'180'} />
        <h1 className="user-info__name">{user.firstName} {user.lastName}</h1>
        <p className="user-info__description">{user.description}</p>
        <RatingInfo count={user.rating} />
    </div>
);

UserInfo.propTypes = {
    user: PropTypes.object.isRequired,
};

export default UserInfo;

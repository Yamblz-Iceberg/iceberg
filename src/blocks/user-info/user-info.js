import React from 'react';
import PropTypes from 'prop-types';

import { Avatar, RatingInfo } from './../../blocks';

import './user-info.scss';

const UserInfo = ({ user }) => {
    const infoStyles = {
        backgroundImage: `url(${user.photo})`,
    };
    return (<div className="user-info">
        <div className="user-info__background" style={infoStyles} />
        <div className="user-info__text">
            <h4 className="user-info__name">{user.firstName} {user.lastName}</h4>
            <p className="user-info__description">{user.description}</p>
        </div>
        <div className="user-info__avatar">
            <Avatar photo={user.photo} size="70" />
            <RatingInfo count={user.rating || 0} />
        </div>
    </div>);
};

UserInfo.propTypes = {
    user: PropTypes.object.isRequired,
};

export default UserInfo;

import React from 'react';
import PropTypes from 'prop-types';

import './avatar.scss';

const Avatar = ({ photo, size }) => (
    <div className="user__avatar">
        <img className="user__photo" src={photo} alt="user" width={size} />
    </div>
);

Avatar.propTypes = {
    photo: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
};

export default Avatar;

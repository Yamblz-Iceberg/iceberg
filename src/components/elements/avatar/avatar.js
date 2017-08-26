import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from './../';

import './avatar.scss';

const Avatar = ({ photo, size }) => {
    let template;

    const avatarStyles = {
        width: `${size}px`,
        height: `${size}px`,
    };

    if (photo) {
        template = (<div className="user__avatar" style={avatarStyles}>
            <img className="user__photo" src={photo} alt="user" width={size} />
        </div>);
    } else {
        template = (<Icon iconName={'account'} />);
    }
    return template;
};

Avatar.propTypes = {
    photo: PropTypes.string,
    size: PropTypes.string,
};

Avatar.defaultProps = {
    photo: '',
    size: '24',
};

export default Avatar;

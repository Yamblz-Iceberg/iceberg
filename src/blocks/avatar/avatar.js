import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../blocks';

import './avatar.scss';

const Avatar = ({ photo, size, iconColor }) => {
    let template;

    const avatarStyles = {
        width: `${size}px`,
        height: `${size}px`,
    };

    if (photo) {
        template = (
            <div className="avatar" style={avatarStyles}>
                <img className="avatar__photo" src={photo} alt="user" width={size} />
            </div>
        );
    } else {
        template = (
            <span className="avatar--no-photo">
                <Icon iconName="empty-profile" iconColor={iconColor} iconWidth={size} iconHeight={size} />
            </span>
        );
    }
    return template;
};

Avatar.propTypes = {
    photo: PropTypes.string,
    size: PropTypes.string,
    iconColor: PropTypes.string,
};

Avatar.defaultProps = {
    photo: '',
    size: '24',
    iconColor: '#000',
};

export default Avatar;

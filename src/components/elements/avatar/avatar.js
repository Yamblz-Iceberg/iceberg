import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from './../';

import './avatar.scss';

const Avatar = ({ photo, size = 24 }) => {
    let template;

    const avatarStyles = {
        width: size,
        height: size,
    };

    if (photo) {
        template = (<div className="user__avatar" style={avatarStyles}>
            <img className="user__photo" src={photo} alt="user" width={size} />
        </div>);
    } else {
        template = (<Icon
            className="home-header__icon-settings"
            iconName={'account'}
            iconHeight={size}
            iconWidth={size}
        />);
    }
    return template;
};

Avatar.propTypes = {
    photo: PropTypes.string,
    size: PropTypes.number,
};

export default Avatar;

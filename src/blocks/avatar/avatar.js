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
        template = (<div className="user__avatar" style={avatarStyles}>
            <img className="user__photo" src={photo} alt="user" width={size} />
        </div>);
    } else {
        template = (<Icon iconName={'account'} iconColor={iconColor} iconWidth={size} iconHeight={size} />);
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

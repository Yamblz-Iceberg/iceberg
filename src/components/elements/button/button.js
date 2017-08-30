import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';
import vars from '../../../variables.scss';

const Button = ({ type, size, icon, text, background, isDisabled, onClick }) => {
    const buttonStyles = {
        background,
        color: '#000',
    };
    if (size) {
        switch (size) {
        case 'small':
            buttonStyles.height = '36px';
            buttonStyles.paddingLeft = '16px';
            buttonStyles.paddingRight = '16px';
            break;
        case 'max-width':
            buttonStyles.width = '100%';
            buttonStyles.justifyContent = 'center';
            break;
        default:
            break;
        }
    }
    if (type) {
        switch (type) {
        case 'light':
            buttonStyles.background = 'transparent';
            buttonStyles.border = '2px solid #d3d3d3';
            buttonStyles.color = '#000';
            break;
        default:
            break;
        }
    }
    if (isDisabled) {
        buttonStyles.background = '#e6e6e6';
        buttonStyles.color = '#666';
    }
    return (
        <button className="button" style={buttonStyles} onClick={onClick} disabled={isDisabled}>
            {icon}
            <span className="button__text">{text}</span>
        </button>
    );
};

Button.defaultProps = {
    background: vars.mainYellow,
    icon: null,
    onClick: null,
    type: null,
    size: null,
    isDisabled: false,
};

Button.propTypes = {
    icon: PropTypes.object,
    text: PropTypes.string.isRequired,
    background: PropTypes.string,
    onClick: PropTypes.any,
    type: PropTypes.string,
    size: PropTypes.string,
    isDisabled: PropTypes.bool,
};

export default Button;

import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';
import vars from '../../../variables.scss';

const Button = ({ type, icon, text, background, onClick }) => {
    let buttonStyles = {
        background,
    };
    if (type) {
        switch (type) {
        case 'light':
            buttonStyles = {
                background: 'transparent',
                border: '2px solid #d3d3d3',
                color: '#000',
            };
            break;
        default:
            break;
        }
    }
    return (
        <button className="button" style={buttonStyles} onClick={onClick}>
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
};

Button.propTypes = {
    icon: PropTypes.object,
    text: PropTypes.string.isRequired,
    background: PropTypes.string,
    onClick: PropTypes.any,
    type: PropTypes.string,
};

export default Button;

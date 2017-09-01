import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';
import vars from '../../variables.scss';

const Button = ({ type, size, icon, text, background, isDisabled, onClick }) => (
    // TODO убрать инлайненные стили
    <button
        className={`button
        ${size !== null ? `button--${size}` : ''}
        ${type !== null ? `button--${type}` : ''}
        ${isDisabled !== false ? 'button--disable' : ''}`
        }
        onClick={onClick}
        disabled={isDisabled}
        style={{ background }}
    >
        {icon}
        <span className="button__text">{text}</span>
    </button>
);

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

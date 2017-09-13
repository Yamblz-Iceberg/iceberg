import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = ({ type, size, icon, text, isDisabled, onClick }) => (
    // TODO убрать инлайненные стили
    <button
        className={`button
        button--${type}
        ${size !== null ? `button--${size}` : ''}
        ${isDisabled === true ? 'button--disable' : ''}`
        }
        onClick={onClick}
        disabled={isDisabled}
    >
        <span className="button__wrap">
            {icon}
            <span className="button__text">{text}</span>
        </span>
    </button>
);

Button.defaultProps = {
    icon: null,
    onClick: null,
    type: 'yellow',
    size: null,
    isDisabled: false,
};

Button.propTypes = {
    icon: PropTypes.object,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.any,
    type: PropTypes.string,
    size: PropTypes.string,
    isDisabled: PropTypes.bool,
};

export default Button;

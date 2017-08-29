import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';
import vars from '../../../variables.scss';

const Button = ({ icon, text, background, onClick }) => {
    const buttonStyles = {
        background,
    };
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
};

Button.propTypes = {
    icon: PropTypes.object,
    text: PropTypes.string.isRequired,
    background: PropTypes.string,
    onClick: PropTypes.any,
};

export default Button;

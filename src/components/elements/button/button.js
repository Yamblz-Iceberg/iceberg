import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';
import vars from '../../../variables.scss';

const Button = ({ icon, text, background }) => {
    const buttonStyles = {
        background,
    };

    return (
        <button className="button" style={buttonStyles}>
            {icon}
            <span className="button__text">{text}</span>
        </button>
    );
};

Button.defaultProps = {
    background: vars.mainYellow,
};

Button.propTypes = {
    icon: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired,
    background: PropTypes.string,
};

export default Button;

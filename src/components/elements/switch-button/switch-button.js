import React from 'react';
import PropTypes from 'prop-types';

import './switch-button.scss';

const SwitchButton = ({ type }) => {
    const switchButtonsId = `${type}-${Math.floor(Math.random() * (1, 100))}`;

    return (
        <div className="switch-button">
            <input
                className="switch-button__input"
                type="checkbox"
                id={switchButtonsId}
            />
            <label
                htmlFor={switchButtonsId}
                className={`${type} switch-button__label`}
            />
        </div>
    );
};

SwitchButton.defaultProps = {
    type: 'android',
};

SwitchButton.propTypes = {
    // 'android' || 'ios'
    type: PropTypes.string,
};

export default SwitchButton;

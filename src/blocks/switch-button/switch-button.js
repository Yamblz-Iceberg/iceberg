import React from 'react';
import PropTypes from 'prop-types';

import './switch-button.scss';

const SwitchButton = ({ type, callback }) => {
    const switchButtonsId = `${type}-${Math.random()}`;

    const handleChange = (e) => {
        callback(e.target.checked);
    };

    return (
        <div className="switch-button">
            <input
                className="switch-button__input"
                type="checkbox"
                id={switchButtonsId}
                onChange={handleChange}
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
    callback: PropTypes.func.isRequired,
};

export default SwitchButton;

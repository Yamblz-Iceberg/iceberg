import React from 'react';
import PropTypes from 'prop-types';

import './switch-button.scss';

const SwitchButton = ({ data }) => (
    <div className="switch-button">
        <input className="switch-button__input" type="checkbox" id={data.type} />
        <label
            htmlFor={data.type}
            className={`${data.type} switch-button__label`}
        />
    </div>
);

SwitchButton.propTypes = {
    data: PropTypes.shape({
        // 'android' || 'ios'
        type: PropTypes.string.isRequired,
    }).isRequired,
};

export default SwitchButton;

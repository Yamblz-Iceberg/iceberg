import React from 'react';
import PropTypes from 'prop-types';

import './hash-tag.scss';

const HashTag = ({ name, color, className }) => {
    const hashTagStyles = {
        background: color,
    };

    return (
        <a href="test" className={`hash-tag ${className}`} style={hashTagStyles}>
            <span className="hash-tag__text">{`#${name}`}</span>
        </a>
    );
};

HashTag.defaultProps = {
    className: '',
};

HashTag.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default HashTag;

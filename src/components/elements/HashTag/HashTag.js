import React from 'react';
import PropTypes from 'prop-types';

import './HashTag.scss';

const HashTag = ({ href, text, background }) => {
    const hashTagStyles = {
        background,
    };

    return (
        <a href={href} className="hash-tag" style={hashTagStyles}>
            <span className="hash-tag__text">{text}</span>
        </a>
    );
};

HashTag.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
};

export default HashTag;

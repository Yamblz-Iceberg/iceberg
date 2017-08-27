import React from 'react';
import PropTypes from 'prop-types';

import './hash-tag.scss';

const HashTag = ({ href, text, background, className }) => {
    const hashTagStyles = {
        background,
    };

    return (
        <a href={href} className={`hash-tag ${className}`} style={hashTagStyles}>
            <span className="hash-tag__text">{text}</span>
        </a>
    );
};

HashTag.defaultProps = {
    className: '',
};

HashTag.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default HashTag;

import React from 'react';
import PropTypes from 'prop-types';

import './HashTag.scss';

const HashTag = ({ href, text, background }) => {
    const hashTagStyles = {
        background,
    };

    return (
        <a href={href} className="HashTag" style={hashTagStyles}>
            <span className="HashTag__text">{text}</span>
        </a>
    );
};

HashTag.defaultProps = {
    background: '#ffe200',
};

HashTag.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    background: PropTypes.string,
};

export default HashTag;

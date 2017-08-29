import React from 'react';
import PropTypes from 'prop-types';

import './hash-tag.scss';

const HashTag = ({ name, size }) => {
    const className = size === 'small' ? 'hash-tag hash-tag--small' : 'hash-tag';

    return (
        <a href="test" className={className}>
            <span className="hash-tag__text">{`#${name}`}</span>
        </a>
    );
};

HashTag.defaultProps = {
    size: '',
};

HashTag.propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
};

export default HashTag;

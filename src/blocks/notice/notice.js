import React from 'react';
import PropTypes from 'prop-types';

import './notice.scss';

const Notice = ({ text, left, top }) => {
    const noticeStyles = { top, left };

    return (
        <div
            className="notice"
            role="button"
            tabIndex="0"
        >
            <div
                className="notice__text-content"
                style={noticeStyles}
            >{text}</div>
        </div>
    );
};

Notice.defaultProps = {
    top: 0,
    left: 0,
};

Notice.propTypes = {
    top: PropTypes.number,
    left: PropTypes.number,
    text: PropTypes.string.isRequired,
};

export default Notice;

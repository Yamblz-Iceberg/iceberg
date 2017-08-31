import React from 'react';
import PropTypes from 'prop-types';

import './rating-info.scss';

const RatingInfo = ({ count }) => (
    <div className="rating-info-wrap">
        <div className="rating-info">
            <div className="rating-info_count">{count}</div>
        </div>
    </div>
);

RatingInfo.propTypes = {
    count: PropTypes.number.isRequired,
};

export default RatingInfo;

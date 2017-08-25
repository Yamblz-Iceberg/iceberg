import React from 'react';

// import PropTypes from 'prop-types';

import './home-header.scss';
import { Icon } from '../../elements';

const HomeHeader = () => (
    <header className="home-header">
        <div>
            <Icon iconName={'search'} />
        </div>
        <div>
            <h2>Айсберг</h2>
        </div>
        <div>
            <Icon iconName={'archive'} />
            <Icon iconName={'settings'} />
        </div>
    </header>
);

// FeedHeader.propTypes = {
//     hashes: PropTypes.arrayOf(
//         PropTypes.object.isRequired,
//     ).isRequired,
// };

export default HomeHeader;

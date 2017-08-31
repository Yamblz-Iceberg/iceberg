import React from 'react';
import PropTypes from 'prop-types';
import { HashTag } from '../../blocks';

import './hash-tape.scss';

const HashTape = ({ hashes }) => (
    <div className="hash-tape">
        { hashes.map(hash => <HashTag {...hash} key={hash._id} />) }
    </div>
);

HashTape.propTypes = {
    hashes: PropTypes.arrayOf(
        PropTypes.object.isRequired,
    ).isRequired,
};

export default HashTape;

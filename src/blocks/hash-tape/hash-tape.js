import React from 'react';
import PropTypes from 'prop-types';
import { HashTag } from '../../blocks';

import './hash-tape.scss';

const HashTape = ({ hashes, size }) => (
    <div className="hash-tape">
        <div className="hash-tape__inner">
            { hashes.map(hash => <HashTag {...hash} key={hash._id} size={size} id={hash._id} />) }
        </div>
    </div>
);

HashTape.propTypes = {
    hashes: PropTypes.arrayOf(
        PropTypes.object.isRequired,
    ).isRequired,
    size: PropTypes.string.isRequired,
};

export default HashTape;

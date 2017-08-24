import React from 'react';
import PropTypes from 'prop-types';
import { HashTag } from '../../elements';

import './hash-tape.scss';

const HashTape = ({ hashes }) => (
    <div className="hash-tape">
        {(hashes.length > 0)
            ? hashes.map(hash => <HashTag {...hash} key={hash.id} />)
            : ''}
    </div>
);

HashTape.propTypes = {
    hashes: PropTypes.arrayOf(
        PropTypes.object.isRequired,
    ).isRequired,
};

export default HashTape;

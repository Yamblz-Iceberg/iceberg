import React from 'react';
import PropTypes from 'prop-types';
import { HashTag } from '../../elements';

const HashTape = ({ hashes }) => (
    <div>
        {hashes && hashes.map(hash => <HashTag hash key={hash.id} />)}
    </div>
);

HashTape.propTypes = {
    hashes: PropTypes.arrayOf(
        PropTypes.shape({
            href: PropTypes.string.isRequired,
            string: PropTypes.string.isRequired,
            background: PropTypes.string.isRequired,
        }),
    ).isRequired,
};

export default HashTape;

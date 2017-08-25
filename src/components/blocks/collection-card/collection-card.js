import React from 'react';
import PropTypes from 'prop-types';

import './collection-card.scss';

const CollectionCard = ({ data }) => {
    const cardStyles = {
        background: data.background,
    };

    return (
        <div className="collection-card" style={cardStyles}>
            <div className="collection-card__title">{data.title}</div>
        </div>
    );
};

CollectionCard.propTypes = {
    data: PropTypes.object.isRequired,
};


export default CollectionCard;

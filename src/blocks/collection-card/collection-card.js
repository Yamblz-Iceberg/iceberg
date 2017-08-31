import React from 'react';
import PropTypes from 'prop-types';

import './collection-card.scss';

import { HashTag } from './../../blocks';
import { TemplateCard } from './..';

const CollectionCard = ({ data }) => {
    const hashes = data.tags;

    const component = (
        <div className="collection-card">
            { hashes.map(hash => (
                <HashTag
                    name={hash.name}
                    size={'small'}
                    key={hash._id}
                />)) }
            <h2 className="collection-card__title">{data.name}</h2>
        </div>
    );

    const tempCard = {
        component,
        background: data.color,
        userName: `${data.author.firstName} ${data.author.lastName}`,
        avatar: data.author.photo,
        linksCount: data.linksCount,
        savedTimesCount: data.savedTimesCount,
    };

    return (
        <TemplateCard data={tempCard} />
    );
};

CollectionCard.propTypes = {
    data: PropTypes.object.isRequired,
};


export default CollectionCard;

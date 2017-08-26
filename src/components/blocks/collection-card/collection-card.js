import React from 'react';
import PropTypes from 'prop-types';

import './collection-card.scss';

import { TemplateCard } from './..';

const CollectionCard = ({ data }) => {
    const component = () => (
        <div className="collection-card">
            <h4 className="collection-card__title">{data.name}</h4>
        </div>
    );

    const tempCard = {
        component,
        background: data.color,
        userName: `${data.author.firstName} ${data.author.lastName}`,
        avatar: data.author.photo,
        linksCount: data.links.length,
        savedLinksCount: 5,
    };

    return (
        <TemplateCard data={tempCard} />
    );
};

CollectionCard.propTypes = {
    data: PropTypes.object.isRequired,
};


export default CollectionCard;

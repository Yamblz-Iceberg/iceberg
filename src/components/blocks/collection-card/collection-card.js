import React from 'react';
import PropTypes from 'prop-types';

import './collection-card.scss';

import { TemplateCard } from './..';

const CollectionCard = ({ data }) => {
    const component = () => (
        <div className="collection-card">
            <h2 className="collection-card__title">{data.title}</h2>
        </div>
    );

    const tempCard = {
        component,
        background: data.background,
        userName: data.userName,
        avatar: data.avatar,
        linksCount: data.linksCount,
        savedLinksCount: data.savedLinksCount,
    };

    return (
        <TemplateCard data={tempCard} />
    );
};

CollectionCard.propTypes = {
    data: PropTypes.object.isRequired,
};


export default CollectionCard;

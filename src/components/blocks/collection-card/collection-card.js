import React from 'react';
import PropTypes from 'prop-types';

import './collection-card.scss';

import { HashTag } from './../../elements';
import { TemplateCard } from './..';

const CollectionCard = ({ data }) => {
    const hashes = [
        {
            href: '#',
            text: '#анимации',
        },
        {
            href: '#',
            text: '#ux',
        },
        {
            href: '#',
            text: '#ui',
        },
        {
            href: '#',
            text: '#javascript',
        },
    ];

    const hashStyle = {
        className: 'hash-tag--small',
        background: 'rgba(0,0,0, .5)',
    };

    const component = (
        <div className="collection-card">
            { hashes.map(hash => (
                <HashTag
                    {...Object.assign(hash, hashStyle)}
                    key={hash.id}
                />)) }
            <h2 className="collection-card__title">{data.name}</h2>
        </div>
    );

    const tempCard = {
        component,
        background: data.color,
        userName: `${data.author.firstName} ${data.author.lastName}`,
        avatar: data.author.photo,
        linksCount: data.links.length || 0,
        savedLinksCount: 5 || 0, // Todo: Заменить '5' на свойство
    };

    return (
        <TemplateCard data={tempCard} />
    );
};

CollectionCard.propTypes = {
    data: PropTypes.object.isRequired,
};


export default CollectionCard;

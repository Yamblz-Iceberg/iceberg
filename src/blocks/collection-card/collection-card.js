import React from 'react';
import PropTypes from 'prop-types';

import './collection-card.scss';

import { HashTag, CardFooter } from './../../blocks';

const CollectionCard = ({ data }) => {
    const hashes = data.tags;
    const cardStyles = {
        background: `${data.color} url(${data.photo})`,
    };

    const avatarOptions = {
        size: '25',
        photo: data.author.photo,
        iconColor: '#fff',
    };

    const userName = `${data.author.firstName} ${data.author.lastName}`;

    const hashesCount = hashes.length - 1;

    return (
        <div className="collection-card" style={cardStyles}>
            <div className="collection-card__header">
                {
                    hashes[0] && <HashTag
                        name={hashes[0].name}
                        size={'small'}
                        key={hashes[0]._id}
                    />
                }
                {
                    (hashesCount > 0) && <div className="hash-tag hash-tag--small hash-tag__count">
                        <span className="hash-tag__text">{`+ ${hashesCount}`}</span>
                    </div>
                }
                <h2 className="collection-card__title">{data.name}</h2>
            </div>

            <CardFooter
                idCard={data._id}
                avatarOptions={avatarOptions}
                userName={userName}
                linksCount={data.linksCount}
                savedTimesCount={data.savedTimesCount}
                saved={data.saved}
            />

            { data.photo ? <div className="collection-card__overlay" /> : null }
        </div>
    );
};

CollectionCard.propTypes = {
    data: PropTypes.object.isRequired,
};


export default CollectionCard;

import React from 'react';
import PropTypes from 'prop-types';

import './collection-card.scss';

import { HashTag, Avatar, Icon } from './../../blocks';

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

    return (
        <div className="collection-card" style={cardStyles}>
            <div className="collection-card__header">
                { hashes.map(hash => (
                    <HashTag
                        name={hash.name}
                        size={'small'}
                        key={hash._id}
                    />)) }
                <h2 className="collection-card__title">{data.name}</h2>
            </div>

            <div className="collection-card-footer">
                <div className="collection-card-footer__user">
                    <Avatar {...avatarOptions} />
                    <span className="collection-card-footer__user-name">{`${data.author.firstName} ${data.author.lastName}`}</span>
                </div>

                <div className="collection-card-footer__actions">
                    <div className="collection-card-footer__link-action">
                        <Icon iconName={'link'} iconColor={'#fff'} />
                        <span>{data.linksCount}</span>
                    </div>
                    <div className="collection-card-footer__save-action">
                        <Icon iconName={'save-big'} iconColor={'#fff'} />
                        <span>{data.savedTimesCount}</span>
                    </div>
                </div>
            </div>

            { data.photo ? <div className="collection-card__overlay" /> : null }
        </div>
    );
};

CollectionCard.propTypes = {
    data: PropTypes.object.isRequired,
};


export default CollectionCard;

import React from 'react';
import PropTypes from 'prop-types';

import Icon from './../../elements/icon/icon';

import './collection-card.scss';

const CollectionCard = ({ data }) => {
    const cardStyles = {
        background: data.background,
    };

    return (
        <div className="collection-card" style={cardStyles}>
            <div className="collection-card__title">{data.title}</div>

            <div className="collection-card-footer">

                <div className="collection-card-footer__user">
                    <div className="collection-card-footer__user-logo" />
                    <span className="collection-card-footer__user-name">Константин А.</span>
                </div>

                <div className="collection-card-footer__actions">
                    <div className="collection-card-footer__link-action">
                        <Icon iconName={'link'} />
                        <span>4</span>
                    </div>
                    <div className="collection-card-footer__save-action">
                        <Icon iconName={'save-big'} />
                        <span>4</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

CollectionCard.propTypes = {
    data: PropTypes.object.isRequired,
};


export default CollectionCard;
